/**
 * Complete Care - Email & Web3Forms Configuration
 *
 * How to activate live email delivery:
 * 1. Visit https://web3forms.com/ and enter the doctor's email (e.g. info@completecare.in).
 * 2. Copy the Access Key received in email.
 * 3. Add to your .env file:
 *    VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
 *    OR paste it directly into WEB3FORMS_ACCESS_KEY below.
 */

export const MAIL_CONFIG = {
  // Web3Forms Access Key (reads from .env or fallback)
  web3FormsAccessKey:
    (typeof import.meta !== "undefined" && import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY) ||
    "",

  // Primary Clinic & Doctor email addresses
  doctorEmail: "info@completecare.in",
  clinicPhone: "+91 8980 676 676",
  whatsappNumber: "918980676676",

  // Email Notification Subjects
  appointmentSubject: "New Appointment Request - Complete Care Physiotherapy",
  careerSubject: "New Career Application - Complete Care Physiotherapy",
  homeVisitSubject: "New Home Visit Request - Complete Care Physiotherapy",
};
