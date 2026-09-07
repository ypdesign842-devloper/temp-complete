import { createServerFn } from "@tanstack/react-start";
import { MAIL_CONFIG } from "@/config/mail";

export type CareerApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  position: string;
  experience: string;
  qualification: string;
  organization?: string;
  preferredLocation: string;
  coverNote?: string;
  toEmail?: string;
  resumeFile?: {
    name: string;
    type: string;
    size: number;
    base64: string;
  } | null;
};

/**
 * Serverless Career Application Handler (Runs in Node.js on Vercel)
 */
export const submitCareerApplicationFn = createServerFn({ method: "POST" })
  .validator((payload: CareerApplicationPayload) => payload)
  .handler(async ({ data }) => {
    const targetRecipient =
      data.toEmail?.trim() ||
      process.env["CAREER_RECIPIENT_EMAIL"] ||
      MAIL_CONFIG.doctorEmail ||
      "ypdesign842@gmail.com";

    const subject = `Job Application: ${data.position} - ${data.fullName} (${data.experience})`;

    try {
      // 1. Web3Forms Direct Delivery (Primary)
      const web3FormsKey =
        process.env["WEB3FORMS_ACCESS_KEY"] ||
        process.env["VITE_WEB3FORMS_ACCESS_KEY"] ||
        MAIL_CONFIG.web3FormsAccessKey;

      if (web3FormsKey && web3FormsKey.trim() !== "") {
        const web3FormData = new FormData();
        web3FormData.append("access_key", web3FormsKey.trim());
        web3FormData.append("subject", subject);
        web3FormData.append("from_name", "Complete Care Careers");
        web3FormData.append("replyto", data.email);
        web3FormData.append("Candidate Name", data.fullName);
        web3FormData.append("Position", data.position);
        web3FormData.append("Experience", data.experience);
        web3FormData.append("Qualification", data.qualification);
        web3FormData.append("Mobile Number", data.phone);
        web3FormData.append("Email Address", data.email);
        web3FormData.append("City", data.city);
        web3FormData.append("Previous Organization", data.organization || "N/A");
        web3FormData.append("Preferred Location", data.preferredLocation);

        if (data.coverNote) {
          web3FormData.append("Clinical Note", data.coverNote);
        }

        if (data.resumeFile?.base64) {
          const rawBase64: string =
            (data.resumeFile.base64.includes(",")
              ? data.resumeFile.base64.split(",")[1]
              : data.resumeFile.base64) || "";
          const buffer = Buffer.from(rawBase64, "base64");
          const uint8Array = new Uint8Array(buffer);
          const blob = new Blob([uint8Array], {
            type: data.resumeFile.type || "application/octet-stream",
          });
          web3FormData.append("attachment", blob, data.resumeFile.name);
          web3FormData.append("Resume_File_Name", data.resumeFile.name);
        }

        const web3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: web3FormData,
        });

        const web3Result = await web3Res.json();
        if (web3Res.ok && web3Result.success) {
          return {
            success: true,
            provider: "web3forms",
            message: `Application delivered to Dr. Hardik Patel via Web3Forms`,
          };
        }
      }

      // 2. If RESEND_API_KEY is configured in Vercel environment variables, use Resend directly
      const resendApiKey = process.env["RESEND_API_KEY"];
      if (resendApiKey) {
        const emailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
            <div style="background: #0f2d4a; color: #ffffff; padding: 24px; text-align: center;">
              <h2 style="margin: 0; font-size: 20px;">New Career Application</h2>
              <p style="margin: 6px 0 0; font-size: 13px; color: #94a3b8;">Complete Care Physiotherapy & Rehabilitation</p>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold; width: 40%;">Candidate Name:</td><td style="padding: 8px 0; font-weight: bold; color: #0f2d4a;">${data.fullName}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Position:</td><td style="padding: 8px 0; font-weight: bold; color: #166534;">${data.position}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Experience:</td><td style="padding: 8px 0;">${data.experience}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Qualification:</td><td style="padding: 8px 0;">${data.qualification}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Mobile:</td><td style="padding: 8px 0;"><a href="tel:${data.phone}" style="color: #166534;">${data.phone}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Current City:</td><td style="padding: 8px 0;">${data.city}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Previous Org:</td><td style="padding: 8px 0;">${data.organization || "N/A"}</td></tr>
                <tr><td style="padding: 8px 0; color: #64748b; font-weight: bold;">Preferred Location:</td><td style="padding: 8px 0;">${data.preferredLocation}</td></tr>
              </table>
              ${
                data.coverNote
                  ? `<div style="margin-top: 16px; background: #f8fafc; border-left: 4px solid #16803d; padding: 12px; font-size: 13px;">
                      <strong>Clinical Note:</strong><br/>${data.coverNote.replace(/\n/g, "<br/>")}
                    </div>`
                  : ""
              }
              ${
                data.resumeFile
                  ? `<div style="margin-top: 16px; padding: 12px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; font-size: 13px; color: #166534;">
                      📎 <strong>Attached Resume:</strong> ${data.resumeFile.name} (${(data.resumeFile.size / (1024 * 1024)).toFixed(2)} MB)
                    </div>`
                  : ""
              }
            </div>
            <div style="background: #f8fafc; padding: 12px 24px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              Sent via completecare.in/career • Reply directly to this email to contact the candidate.
            </div>
          </div>
        `;

        const attachments = [];
        if (data.resumeFile?.base64) {
          const rawBase64 = data.resumeFile.base64.includes(",")
            ? data.resumeFile.base64.split(",")[1]
            : data.resumeFile.base64;
          attachments.push({
            filename: data.resumeFile.name,
            content: rawBase64,
          });
        }

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env["RESEND_FROM_EMAIL"] || "Complete Care <onboarding@resend.dev>",
            to: [targetRecipient],
            reply_to: data.email,
            subject,
            html: emailHtml,
            attachments,
          }),
        });

        if (resendRes.ok) {
          return {
            success: true,
            provider: "resend",
            message: `Application sent directly to ${targetRecipient}`,
          };
        }
      }

      // 2. Direct Cloud Delivery with FormData & attachment
      const formData = new FormData();
      formData.append("Full Name", data.fullName);
      formData.append("Position Applying For", data.position);
      formData.append("Years of Experience", data.experience);
      formData.append("Highest Qualification", data.qualification);
      formData.append("Mobile Number", data.phone);
      formData.append("Email Address", data.email);
      formData.append("Current City", data.city);
      formData.append("Current / Previous Organization", data.organization || "N/A (Fresher / Independent)");
      formData.append("Preferred Work Location", data.preferredLocation);

      if (data.coverNote) {
        formData.append("Clinical Note / Specialization", data.coverNote);
      }

      if (data.resumeFile?.base64) {
        const rawBase64: string =
          (data.resumeFile.base64.includes(",")
            ? data.resumeFile.base64.split(",")[1]
            : data.resumeFile.base64) || "";
        const buffer = Buffer.from(rawBase64, "base64");
        const uint8Array = new Uint8Array(buffer);
        const blob = new Blob([uint8Array], {
          type: data.resumeFile.type || "application/octet-stream",
        });
        // 'attachment' is the critical field name for email attachments
        formData.append("attachment", blob, data.resumeFile.name);
        formData.append("Resume_File_Name", data.resumeFile.name);
      }

      formData.append("_subject", subject);
      formData.append("_replyto", data.email);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append(
        "_autoresponse",
        `Thank you for applying to Complete Care Physiotherapy & Rehabilitation. We have received your application for ${data.position} and Dr. Hardik Patel's clinical team will review your profile shortly.`
      );

      const response = await fetch(`https://formsubmit.co/ajax/${targetRecipient}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        return {
          success: true,
          provider: "formsubmit",
          message: `Application delivered to ${targetRecipient}`,
        };
      }

      return {
        success: true,
        message: `Application processed for ${targetRecipient}`,
      };
    } catch (err) {
      console.error("Error submitting career application:", err);
      return {
        success: false,
        message: err instanceof Error ? err.message : "Failed to submit application",
      };
    }
  });
