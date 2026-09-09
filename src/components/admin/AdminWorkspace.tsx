import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Plus,
  Edit3,
  Trash2,
  ExternalLink,
  Calendar,
  Tag,
  User,
  Image as ImageIcon,
  CheckCircle2,
  FileText,
  HelpCircle,
  Eye,
  LogOut,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Upload,
  Globe,
  LayoutGrid,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { posts, type Post } from "@/data/posts";
import { saveBlogPostFn, deleteBlogPostFn } from "@/lib/cms-server";

interface AdminWorkspaceProps {
  username: string;
  onLogout: () => void;
}

export function AdminWorkspace({ username, onLogout }: AdminWorkspaceProps) {
  // Articles state
  const [articleList, setArticleList] = useState<Post[]>(posts);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Composer state
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"content" | "seo">("content");
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form fields
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugLocked, setIsSlugLocked] = useState(true);
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [author, setAuthor] = useState("Dr. Hardik Patel (PT)");
  const [category, setCategory] = useState("Physiotherapy Treatments");
  const [excerpt, setExcerpt] = useState("");
  const [imagePath, setImagePath] = useState("/assets/blogs/default-banner.webp");
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageFileName, setImageFileName] = useState<string>("");
  const [contentMarkdown, setContentMarkdown] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([
    { question: "", answer: "" },
  ]);

  // Unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return Array.from(set);
  }, []);

  // Filtered post list
  const filteredPosts = useMemo(() => {
    return articleList.filter((p) => {
      const matchesSearch =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCat =
        selectedCategory === "all" || p.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [articleList, searchQuery, selectedCategory]);

  // Handle Title change & auto-slug
  function handleTitleChange(val: string) {
    setTitle(val);
    if (isSlugLocked && !editingSlug) {
      const generatedSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      setSlug(generatedSlug);
    }
  }

  // Open Composer for New Post
  function openNewComposer() {
    setEditingSlug(null);
    setTitle("");
    setSlug("");
    setIsSlugLocked(true);
    setDate(new Date().toISOString().slice(0, 10));
    setAuthor("Dr. Hardik Patel (PT)");
    setCategory("Physiotherapy Treatments");
    setExcerpt("");
    setImagePath("/assets/blogs/default-banner.webp");
    setImageBase64(null);
    setImageFileName("");
    setContentMarkdown(
      `## Overview\nExplain the clinical condition and how early assessment helps recovery.\n\n## Symptoms and Common Signs\n- Pain and localized stiffness\n- Restricted movement during daily tasks\n\n## Targeted Physiotherapy & Rehabilitation Techniques\nAt Complete Care, our licensed physiotherapists provide structured manual therapy and guided exercise therapy.`
    );
    setMetaDescription("");
    setFaqs([{ question: "", answer: "" }]);
    setActiveTab("content");
    setIsComposerOpen(true);
  }

  // Open Composer for Edit
  function openEditComposer(post: Post) {
    setEditingSlug(post.slug);
    setTitle(post.title);
    setSlug(post.slug);
    setIsSlugLocked(false);
    setDate(post.date);
    setAuthor("Dr. Hardik Patel (PT)");
    setCategory(post.category || "Physiotherapy Treatments");
    setExcerpt(post.excerpt);
    setImagePath(post.image);
    setImageBase64(null);
    setImageFileName("");
    setContentMarkdown(
      `## Overview\n${post.excerpt}\n\n## Advanced Clinical Physiotherapy at Complete Care\nOur multidisciplinary team provides personalized rehabilitation plans designed for long-term recovery.`
    );
    setMetaDescription(post.excerpt);
    setFaqs([{ question: "", answer: "" }]);
    setActiveTab("content");
    setIsComposerOpen(true);
  }

  // Handle Image File Upload
  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image file (PNG, JPG, WebP)");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setImageBase64(base64);
      const cleanName = file.name.toLowerCase().replace(/[^a-z0-9.-]+/g, "-");
      setImageFileName(cleanName);
      setImagePath(`/assets/blogs/${cleanName}`);
      toast.success(`Image "${cleanName}" loaded!`);
    };
    reader.readAsDataURL(file);
  }

  // Add FAQ Item
  function addFaqItem() {
    setFaqs([...faqs, { question: "", answer: "" }]);
  }

  // Remove FAQ Item
  function removeFaqItem(index: number) {
    setFaqs(faqs.filter((_, i) => i !== index));
  }

  // Update FAQ Item
  function updateFaq(index: number, field: "question" | "answer", val: string) {
    const updated = [...faqs];
    if (updated[index]) {
      updated[index][field] = val;
      setFaqs(updated);
    }
  }

  // Insert formatting into markdown editor
  function insertFormatting(prefix: string, suffix: string = "") {
    setContentMarkdown((prev) => prev + `\n${prefix} ` + suffix);
  }

  // Submit / Publish Blog
  async function handlePublish(e: React.FormEvent) {
    e.preventDefault();

    if (!title.trim()) {
      toast.error("Please enter an Article Title");
      return;
    }
    if (!slug.trim()) {
      toast.error("Please enter a valid URL Slug");
      return;
    }
    if (!contentMarkdown.trim()) {
      toast.error("Please write some article content");
      return;
    }

    setIsSaving(true);
    try {
      const validFaqs = faqs.filter((f) => f.question.trim() && f.answer.trim());

      const finalDate: string = date || new Date().toISOString().slice(0, 10);

      const payload = {
        title: title.trim(),
        slug: slug.trim().toLowerCase(),
        date: finalDate,
        author,
        category,
        excerpt: excerpt.trim() || title.trim(),
        image: imagePath,
        ...(imageBase64 && imageFileName
          ? { imageFile: { name: imageFileName, base64: imageBase64 } }
          : {}),
        contentMarkdown,
        faqs: validFaqs,
        metaDescription: metaDescription.trim() || excerpt.trim(),
      };

      const res = await saveBlogPostFn({ data: payload });

      if (res.success) {
        toast.success(res.message);

        // Update local article list
        const newPostItem: Post = {
          slug: payload.slug,
          title: payload.title,
          date: finalDate,
          image: payload.image,
          excerpt: payload.excerpt,
          category: payload.category,
        };

        setArticleList((prev) => {
          const filtered = prev.filter((p) => p.slug !== payload.slug);
          return [newPostItem, ...filtered].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        });

        setIsComposerOpen(false);
      } else {
        toast.error(res.message || "Failed to publish article");
      }
    } catch (err: any) {
      toast.error(err?.message || "Failed to publish article. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  // Delete Blog
  async function handleDelete(targetSlug: string, postTitle: string) {
    if (!window.confirm(`Are you sure you want to delete "${postTitle}"?`)) {
      return;
    }

    try {
      const res = await deleteBlogPostFn({ data: { slug: targetSlug } });
      if (res.success) {
        setArticleList((prev) => prev.filter((p) => p.slug !== targetSlug));
        toast.success(res.message || `Article "${postTitle}" deleted successfully.`);
        if (editingSlug === targetSlug) {
          setIsComposerOpen(false);
        }
      } else {
        toast.error(res.message || `Failed to delete "${postTitle}".`);
      }
    } catch (err: any) {
      toast.error(err?.message || "Failed to delete post. Please try again.");
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] w-full overflow-hidden bg-[#f4f3ed]">
      {/* 1. LEFT SIDEBAR (Gmail-Style Navigation Rail) */}
      <aside className="hidden w-64 shrink-0 flex-col justify-between border-r border-border/80 bg-white p-4 lg:flex">
        <div className="space-y-6">
          {/* Brand & Compose Button */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 px-2">
              <div className="flex size-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-navy leading-tight">Complete Care</h2>
                <span className="text-[10px] font-bold text-teal tracking-wider uppercase">
                  CMS Workspace
                </span>
              </div>
            </div>

            {/* Compose New Button */}
            <button
              type="button"
              onClick={openNewComposer}
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-accent py-3 px-4 text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 transition-all hover:bg-emerald-600 active:scale-95"
            >
              <Plus className="size-5 stroke-[2.5]" />
              <span>Compose Article</span>
            </button>
          </div>

          {/* Navigation Views */}
          <div className="space-y-1">
            <div className="px-3 pb-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Views
            </div>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
                selectedCategory === "all"
                  ? "bg-sand text-navy font-bold shadow-sm"
                  : "text-muted-foreground hover:bg-sand/60 hover:text-navy"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="size-4 text-teal" />
                <span>All Articles</span>
              </div>
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                {articleList.length}
              </span>
            </button>

            <Link
              to="/blogs"
              target="_blank"
              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-sand/60 hover:text-navy"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="size-4 text-teal" />
                <span>Public Blog Page</span>
              </div>
              <ExternalLink className="size-3.5" />
            </Link>
          </div>

          {/* Category Folders */}
          <div className="space-y-1">
            <div className="px-3 pb-1 text-[11px] font-bold tracking-wider text-muted-foreground uppercase">
              Categories
            </div>
            <div className="max-h-48 space-y-0.5 overflow-y-auto pr-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-sand text-accent font-bold"
                      : "text-muted-foreground hover:bg-sand/50 hover:text-navy"
                  }`}
                >
                  <span className="truncate">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* User Info & Logout */}
        <div className="border-t border-border/80 pt-3">
          <div className="flex items-center justify-between rounded-xl bg-sand/60 p-2.5">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                {username.charAt(0).toUpperCase()}
              </div>
              <span className="truncate text-xs font-bold text-navy">{username}</span>
            </div>
            <button
              type="button"
              onClick={onLogout}
              title="Logout"
              className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MIDDLE COLUMN: POST STREAM LIST */}
      <section
        className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${
          isComposerOpen ? "lg:w-1/2 lg:flex-none" : "w-full"
        }`}
      >
        {/* Top Search & Filter Bar */}
        <div className="flex items-center justify-between gap-3 border-b border-border/80 bg-white p-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 79+ articles by title, slug, or keyword..."
              className="w-full rounded-xl border border-input bg-[#f9f7ef]/70 py-2.5 pl-10 pr-4 text-xs sm:text-sm font-medium text-navy placeholder:text-muted-foreground focus:border-accent focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="button"
            onClick={openNewComposer}
            className="flex shrink-0 items-center gap-1.5 rounded-xl bg-accent px-3.5 py-2.5 text-xs font-bold text-accent-foreground shadow-sm hover:bg-emerald-600 lg:hidden"
          >
            <Plus className="size-4" />
            <span>New Post</span>
          </button>
        </div>

        {/* Post Items Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
          <div className="flex items-center justify-between px-1 pb-1 text-xs font-bold text-muted-foreground">
            <span>
              Showing {filteredPosts.length} of {articleList.length} articles
            </span>
            {selectedCategory !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedCategory("all")}
                className="text-accent hover:underline"
              >
                Clear Category Filter
              </button>
            )}
          </div>

          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className={`group flex items-center justify-between gap-4 rounded-2xl border p-3.5 transition-all duration-200 hover:shadow-md ${
                editingSlug === post.slug
                  ? "border-accent bg-emerald-50/40 shadow-sm"
                  : "border-border/80 bg-white hover:border-accent/40"
              }`}
            >
              {/* Left Thumbnail & Info */}
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-border bg-sand/60">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="size-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden">
                  <h3 className="truncate text-xs sm:text-sm font-bold text-navy group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
                    <span className="font-semibold text-teal flex items-center gap-1">
                      <Calendar className="size-3" />
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>&bull;</span>
                    <span className="rounded-md bg-sand px-2 py-0.5 font-bold text-navy text-[10px]">
                      {post.category || "Physiotherapy"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex shrink-0 items-center gap-1.5">
                <Link
                  to={`/${post.slug}` as never}
                  target="_blank"
                  title="View Live Page"
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-sand hover:text-navy"
                >
                  <ExternalLink className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => openEditComposer(post)}
                  title="Edit Article"
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-emerald-50 hover:text-accent"
                >
                  <Edit3 className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(post.slug, post.title)}
                  title="Delete Article"
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RIGHT COLUMN: SPLIT-SCREEN ARTICLE COMPOSER */}
      {isComposerOpen && (
        <aside className="flex flex-col w-full border-l border-border/80 bg-white shadow-2xl lg:w-1/2 overflow-hidden z-30">
          {/* Composer Header */}
          <div className="flex items-center justify-between border-b border-border/80 bg-sand/40 px-6 py-3.5">
            <div className="flex items-center gap-2">
              <span className="badge-clinical text-teal text-xs">
                {editingSlug ? "Edit Article" : "New Article"}
              </span>
              <span className="text-xs font-bold text-navy truncate max-w-xs">
                {title || "Untitled Post"}
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-2">
              <div className="flex rounded-lg border border-border bg-white p-0.5 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setActiveTab("content")}
                  className={`rounded-md px-3 py-1 transition-colors ${
                    activeTab === "content"
                      ? "bg-navy text-white shadow-xs"
                      : "text-muted-foreground hover:text-navy"
                  }`}
                >
                  Content
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("seo")}
                  className={`rounded-md px-3 py-1 transition-colors ${
                    activeTab === "seo"
                      ? "bg-navy text-white shadow-xs"
                      : "text-muted-foreground hover:text-navy"
                  }`}
                >
                  SEO &amp; FAQs
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsComposerOpen(false)}
                className="rounded-lg p-1 text-muted-foreground hover:bg-sand hover:text-navy"
              >
                &times;
              </button>
            </div>
          </div>

          {/* Form Body Scrollable */}
          <form onSubmit={handlePublish} className="flex flex-1 flex-col overflow-y-auto p-6 space-y-5">
            {activeTab === "content" ? (
              <>
                {/* 1. Title */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-navy">
                    Article Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. How Physiotherapy Relieves Knee Pain Naturally"
                    required
                    className="w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm font-bold text-navy focus:border-accent focus:outline-none"
                  />
                </div>

                {/* 2. Slug & Date Row */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-navy">
                        URL Slug
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsSlugLocked(!isSlugLocked)}
                        className="text-[10px] font-bold text-teal hover:underline"
                      >
                        {isSlugLocked ? "Unlock Slug" : "Lock Slug"}
                      </button>
                    </div>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      disabled={isSlugLocked && !editingSlug}
                      placeholder="how-physiotherapy-relieves-knee-pain"
                      required
                      className="w-full rounded-xl border border-input bg-card px-4 py-2 text-xs font-medium text-navy disabled:bg-sand/60 focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Publication Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full rounded-xl border border-input bg-card px-4 py-2 text-xs font-medium text-navy focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                {/* 3. Category & Author Row */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Category
                    </label>
                    <input
                      type="text"
                      list="category-options"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Select or type category..."
                      className="w-full rounded-xl border border-input bg-card px-4 py-2 text-xs font-medium text-navy focus:border-accent focus:outline-none"
                    />
                    <datalist id="category-options">
                      {categories.map((c) => (
                        <option key={c} value={c} />
                      ))}
                    </datalist>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Author
                    </label>
                    <select
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full rounded-xl border border-input bg-card px-4 py-2 text-xs font-medium text-navy focus:border-accent focus:outline-none"
                    >
                      <option value="Dr. Hardik Patel (PT)">Dr. Hardik Patel (PT)</option>
                      <option value="Dr. Foram Patel (PT)">Dr. Foram Patel (PT)</option>
                      <option value="Complete Care Clinical Team">Complete Care Clinical Team</option>
                    </select>
                  </div>
                </div>

                {/* 4. Featured Image Upload & Preview */}
                <div className="space-y-2 rounded-2xl border border-border/80 bg-sand/40 p-4">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <ImageIcon className="size-4 text-accent" />
                      <span>Featured Banner Image</span>
                    </label>
                    <span className="text-[11px] text-muted-foreground">Path: {imagePath}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                      <img
                        src={imageBase64 || imagePath}
                        alt="Preview"
                        className="size-full object-cover"
                      />
                    </div>
                    <label className="flex flex-1 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-accent/40 bg-white p-3 text-center transition-colors hover:border-accent hover:bg-emerald-50/20">
                      <Upload className="size-5 text-accent" />
                      <span className="mt-1 text-xs font-bold text-navy">
                        Click to Upload Image from Computer
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        PNG, JPG, WebP (will be saved in /assets/blogs/)
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                {/* 5. Excerpt */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-navy">
                    Excerpt / Card Summary
                  </label>
                  <textarea
                    rows={2}
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Short 2-sentence summary that appears on blog cards and Google snippets..."
                    className="w-full rounded-xl border border-input bg-card p-3 text-xs font-medium text-navy placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                </div>

                {/* 6. Content Body Editor */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-navy">
                      Article Content (Markdown Supported)
                    </label>
                    {/* Formatting Helper Buttons */}
                    <div className="flex items-center gap-1 text-xs">
                      <button
                        type="button"
                        onClick={() => insertFormatting("## Section Title", "")}
                        className="rounded px-2 py-0.5 font-bold bg-sand hover:bg-sand-muted"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("### Subheading", "")}
                        className="rounded px-2 py-0.5 font-bold bg-sand hover:bg-sand-muted"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting("- Bullet Point", "")}
                        className="rounded px-2 py-0.5 font-bold bg-sand hover:bg-sand-muted"
                      >
                        &bull; List
                      </button>
                    </div>
                  </div>

                  <textarea
                    rows={12}
                    value={contentMarkdown}
                    onChange={(e) => setContentMarkdown(e.target.value)}
                    placeholder="Write article content here using ## for Headings and - for bullets..."
                    required
                    className="w-full font-mono rounded-xl border border-input bg-card p-4 text-xs font-medium leading-relaxed text-navy focus:border-accent focus:outline-none shadow-inner"
                  />
                </div>
              </>
            ) : (
              /* TAB 2: SEO & FAQ SCHEMA BUILDER */
              <>
                {/* Meta Description */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <label className="font-bold uppercase tracking-wider text-navy">
                      SEO Meta Description
                    </label>
                    <span
                      className={`font-semibold ${
                        metaDescription.length > 160 ? "text-red-500" : "text-teal"
                      }`}
                    >
                      {metaDescription.length} / 160 chars
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Compelling meta description summarizing clinical benefits for search engines..."
                    className="w-full rounded-xl border border-input bg-card p-3 text-xs font-medium text-navy placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                  />
                </div>

                {/* Google Search SERP Preview Box */}
                <div className="rounded-2xl border border-border bg-[#f9f7ef] p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal uppercase tracking-wider">
                    <Globe className="size-4 text-accent" />
                    <span>Google Search SERP Preview</span>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-white p-3.5 shadow-sm space-y-1">
                    <div className="text-[11px] text-[#202124] truncate">
                      https://completecare.in &rsaquo; {slug || "your-slug"}
                    </div>
                    <div className="text-sm font-medium text-[#1a0dab] hover:underline cursor-pointer truncate">
                      {title ? `${title} | Complete Care` : "Your Article Title Preview"}
                    </div>
                    <div className="text-xs text-[#4d5156] line-clamp-2">
                      {metaDescription ||
                        excerpt ||
                        "Authoritative physiotherapy, chiropractic care, and rehabilitation guidance from Complete Care."}
                    </div>
                  </div>
                </div>

                {/* FAQ Schema Builder */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                        <HelpCircle className="size-4 text-accent" />
                        <span>Google FAQ Schema Builder (Rich Snippets)</span>
                      </h4>
                      <p className="text-[11px] text-muted-foreground mt-0.5">
                        Adds interactive Q&amp;As that display star ratings and FAQs in search results.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addFaqItem}
                      className="rounded-lg bg-sand px-3 py-1.5 text-xs font-bold text-navy hover:bg-sand-muted transition-colors flex items-center gap-1"
                    >
                      <Plus className="size-3.5" />
                      <span>Add FAQ</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-border/80 bg-sand/40 p-3 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-bold text-teal">
                            FAQ Item #{index + 1}
                          </span>
                          {faqs.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeFaqItem(index)}
                              className="text-[10px] font-bold text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => updateFaq(index, "question", e.target.value)}
                          placeholder="e.g. How many physiotherapy sessions are needed?"
                          className="w-full rounded-lg border border-input bg-white px-3 py-1.5 text-xs font-semibold text-navy focus:border-accent focus:outline-none"
                        />
                        <textarea
                          rows={2}
                          value={faq.answer}
                          onChange={(e) => updateFaq(index, "answer", e.target.value)}
                          placeholder="Answer explaining clinical treatment approach..."
                          className="w-full rounded-lg border border-input bg-white p-2.5 text-xs text-navy focus:border-accent focus:outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Bottom Action Buttons */}
            <div className="sticky bottom-0 -mx-6 -mb-6 border-t border-border/80 bg-white p-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsComposerOpen(false)}
                className="rounded-xl border border-border px-4 py-2.5 text-xs font-bold text-navy hover:bg-sand transition-colors"
              >
                Discard
              </button>

              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-2 rounded-xl bg-accent px-6 py-2.5 text-xs sm:text-sm font-bold text-accent-foreground shadow-md shadow-accent/20 hover:bg-emerald-600 active:scale-95 transition-all disabled:opacity-70"
              >
                {isSaving ? (
                  <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <span>{editingSlug ? "Save & Update Article" : "Publish Article to Web"}</span>
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </aside>
      )}
    </div>
  );
}
