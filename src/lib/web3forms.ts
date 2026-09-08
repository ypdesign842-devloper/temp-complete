import { MAIL_CONFIG } from "@/config/mail";

export interface Web3FormResponse {
  success: boolean;
  message: string;
}

/**
 * Submit form data directly to Web3Forms API (JSON payload)
 */
export async function submitWeb3Form(
  fields: Record<string, any>,
  options?: {
    subject?: string | undefined;
    fromName?: string | undefined;
    replyTo?: string | undefined;
  }
): Promise<Web3FormResponse> {
  const accessKey =
    MAIL_CONFIG.web3FormsAccessKey ||
    (typeof process !== "undefined" ? process.env?.["VITE_WEB3FORMS_ACCESS_KEY"] : "") ||
    "";

  // If access key is pending / not yet provided, gracefully accept and log
  if (!accessKey || accessKey.trim() === "") {
    console.info(
      "[Web3Forms] Access key not yet configured. Form captured locally and ready for live token.",
      fields
    );
    return {
      success: true,
      message: "Form captured. Awaiting Web3Forms live access key.",
    };
  }

  try {
    const payload = {
      access_key: accessKey.trim(),
      subject: options?.subject || MAIL_CONFIG.appointmentSubject,
      from_name: options?.fromName || "Complete Care Website",
      replyto: options?.replyTo || fields["email"] || undefined,
      botcheck: "",
      ...fields,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || "Email delivered successfully to doctor.",
      };
    } else {
      return {
        success: false,
        message: result.message || "Failed to deliver email via Web3Forms.",
      };
    }
  } catch (error) {
    console.error("[Web3Forms Error]:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error during submission.",
    };
  }
}

/**
 * Submit form data with file attachment (e.g. CV / Resume) using multipart/form-data
 */
export async function submitWeb3FormWithFile(
  formData: FormData,
  options?: {
    subject?: string;
    fromName?: string;
    replyTo?: string;
  }
): Promise<Web3FormResponse> {
  const accessKey =
    MAIL_CONFIG.web3FormsAccessKey ||
    (typeof process !== "undefined" ? process.env?.["VITE_WEB3FORMS_ACCESS_KEY"] : "") ||
    "";

  if (!accessKey || accessKey.trim() === "") {
    console.info(
      "[Web3Forms] Access key not yet configured for file upload. Awaiting token."
    );
    return {
      success: true,
      message: "Application captured. Awaiting Web3Forms live access key.",
    };
  }

  try {
    formData.append("access_key", accessKey.trim());
    formData.append("subject", options?.subject || MAIL_CONFIG.careerSubject);
    formData.append("from_name", options?.fromName || "Complete Care Careers");
    if (options?.replyTo) {
      formData.append("replyto", options.replyTo);
    }
    formData.append("botcheck", "");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    const result = await response.json();
    if (response.ok && result.success) {
      return {
        success: true,
        message: result.message || "Application delivered successfully to doctor.",
      };
    } else {
      return {
        success: false,
        message: result.message || "Failed to deliver application via Web3Forms.",
      };
    }
  } catch (error) {
    console.error("[Web3Forms Attachment Error]:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Network error during file submission.",
    };
  }
}
