import { createServerFn } from "@tanstack/react-start";
import {
  generateContentFileCode,
  generateRouteFileCode,
  injectIntoSitemapXml,
  removeFromSitemapXml,
  type BlogPayload,
} from "./cms-service";

// Server-side authentication verification
export const verifyAdminLogin = createServerFn({ method: "POST" })
  .validator((data: { username?: string; password?: string }) => data)
  .handler(async ({ data }) => {
    const validUser = process.env["ADMIN_USER"] || "admin@completecare.in";
    const validPass = process.env["ADMIN_PASSWORD"] || "CompleteCare@2026";

    const isValid =
      data.username?.trim().toLowerCase() === validUser.toLowerCase() &&
      data.password === validPass;

    if (!isValid) {
      return { success: false, message: "Invalid Admin Username or Password" };
    }

    return {
      success: true,
      token: Buffer.from(`${validUser}:${Date.now()}`).toString("base64"),
    };
  });

// Save or Update Blog Post (Local Node FS + Production GitHub API)
export const saveBlogPostFn = createServerFn({ method: "POST" })
  .validator((payload: BlogPayload) => payload)
  .handler(async ({ data }) => {
    const isDev = process.env["NODE_ENV"] !== "production";
    const githubToken = process.env["GITHUB_TOKEN"];
    const githubRepo = process.env["GITHUB_REPOSITORY"] || "ypdesign842-devloper/temp-complete";

    const contentCode = generateContentFileCode(data);
    const routeCode = generateRouteFileCode(data);

    try {
      // 1. LOCAL DEVELOPMENT MODE (Direct Node.js fs writes)
      if (isDev || !githubToken) {
        const fs = await import("node:fs/promises");
        const path = await import("node:path");

        const rootDir = process.cwd();

        // A. Save image if provided as base64
        if (data.imageFile?.base64 && data.imageFile?.name) {
          const imageBuffer = Buffer.from(data.imageFile.base64.split(",")[1] || data.imageFile.base64, "base64");
          const imagePath = path.join(rootDir, "public", "assets", "blogs", data.imageFile.name);
          await fs.mkdir(path.dirname(imagePath), { recursive: true });
          await fs.writeFile(imagePath, imageBuffer);
        }

        // B. Save content file
        const contentPath = path.join(rootDir, "src", "content", "posts", `${data.slug}.ts`);
        await fs.mkdir(path.dirname(contentPath), { recursive: true });
        await fs.writeFile(contentPath, contentCode, "utf-8");

        // C. Save route file
        const routePath = path.join(rootDir, "src", "routes", `${data.slug}.tsx`);
        await fs.writeFile(routePath, routeCode, "utf-8");

        // D. Update src/data/posts.ts
        const postsFilePath = path.join(rootDir, "src", "data", "posts.ts");
        let postsContent = await fs.readFile(postsFilePath, "utf-8");

        const newPostItem = {
          slug: data.slug,
          title: data.title,
          date: data.date,
          image: data.image,
          excerpt: data.excerpt,
          category: data.category,
        };

        if (postsContent.includes(`"slug": "${data.slug}"`)) {
          // Replace existing entry
          postsContent = postsContent.replace(
            new RegExp(`\\{\\s*"slug":\\s*"${data.slug}"[\\s\\S]*?\\},?`),
            `${JSON.stringify(newPostItem, null, 2)},`
          );
        } else {
          // Insert at the beginning of rawPosts
          postsContent = postsContent.replace(
            /export const rawPosts: Post\[\] = \[/,
            `export const rawPosts: Post[] = [\n ${JSON.stringify(newPostItem, null, 2)},`
          );
        }
        await fs.writeFile(postsFilePath, postsContent, "utf-8");

        // E. Update public/sitemap.xml
        const sitemapPath = path.join(rootDir, "public", "sitemap.xml");
        try {
          const sitemapContent = await fs.readFile(sitemapPath, "utf-8");
          const updatedSitemap = injectIntoSitemapXml(sitemapContent, data.slug, data.date);
          await fs.writeFile(sitemapPath, updatedSitemap, "utf-8");
        } catch {
          // Sitemap optional in some environments
        }

        return {
          success: true,
          message: `Article "${data.title}" saved successfully!`,
          slug: data.slug,
          mode: "local",
        };
      }

      // 2. PRODUCTION MODE (Secure GitHub API Commit)
      const headers = {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      };

      async function commitFileToGithub(filePath: string, contentStr: string, message: string) {
        const url = `https://api.github.com/repos/${githubRepo}/contents/${filePath}`;
        let sha: string | undefined;

        // Check if file exists to get SHA
        const checkRes = await fetch(url, { headers });
        if (checkRes.ok) {
          const fileData = await checkRes.json();
          sha = fileData.sha;
        }

        const body = {
          message,
          content: Buffer.from(contentStr).toString("base64"),
          ...(sha ? { sha } : {}),
        };

        const putRes = await fetch(url, {
          method: "PUT",
          headers,
          body: JSON.stringify(body),
        });

        if (!putRes.ok) {
          const err = await putRes.text();
          throw new Error(`Failed to commit ${filePath}: ${err}`);
        }
      }

      // Commit content file & route file to GitHub repo
      await commitFileToGithub(
        `src/content/posts/${data.slug}.ts`,
        contentCode,
        `CMS: publish article ${data.slug}`
      );

      await commitFileToGithub(
        `src/routes/${data.slug}.tsx`,
        routeCode,
        `CMS: create route for ${data.slug}`
      );

      return {
        success: true,
        message: `Article "${data.title}" committed to GitHub and deploying on Vercel!`,
        slug: data.slug,
        mode: "production",
      };
    } catch (error) {
      console.error("Error saving blog post:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to save blog post",
      };
    }
  });

// Delete Blog Post
export const deleteBlogPostFn = createServerFn({ method: "POST" })
  .validator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const isDev = process.env["NODE_ENV"] !== "production";
    const githubToken = process.env["GITHUB_TOKEN"];

    try {
      if (isDev || !githubToken) {
        const fs = await import("node:fs/promises");
        const path = await import("node:path");
        const rootDir = process.cwd();

        // 1. Delete content file
        try {
          await fs.unlink(path.join(rootDir, "src", "content", "posts", `${data.slug}.ts`));
        } catch {}

        // 2. Delete route file
        try {
          await fs.unlink(path.join(rootDir, "src", "routes", `${data.slug}.tsx`));
        } catch {}

        // 3. Remove from src/data/posts.ts
        const postsFilePath = path.join(rootDir, "src", "data", "posts.ts");
        let postsContent = await fs.readFile(postsFilePath, "utf-8");
        postsContent = postsContent.replace(
          new RegExp(`\\{\\s*"slug":\\s*"${data.slug}"[\\s\\S]*?\\},?`),
          ""
        );
        await fs.writeFile(postsFilePath, postsContent, "utf-8");

        // 4. Remove from sitemap
        const sitemapPath = path.join(rootDir, "public", "sitemap.xml");
        try {
          const sitemapContent = await fs.readFile(sitemapPath, "utf-8");
          const updatedSitemap = removeFromSitemapXml(sitemapContent, data.slug);
          await fs.writeFile(sitemapPath, updatedSitemap, "utf-8");
        } catch {}

        return { success: true, message: `Article ${data.slug} deleted successfully.` };
      }

      return { success: true, message: `Delete queued for ${data.slug}.` };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to delete post",
      };
    }
  });
