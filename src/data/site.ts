export const site = {
  name: "Complete Care",
  tagline: "Physiotherapy • Fitness • Rehabilitation",
  phone: "+91 8980 676 676",
  phoneHref: "tel:918980676676",
  whatsapp: "https://wa.me/918980676676",
  email: "info@completecare.in",
  director: "Dr. Hardik Patel (PT)",
  stats: [
    { value: "16+", label: "Years clinical experience" },
    { value: "40+", label: "Licensed physiotherapists" },
    { value: "85,000+", label: "Patient recoveries" },
    { value: "6", label: "Clinics across Gujarat" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/completecarephysioclinic" },
    { label: "Instagram", href: "https://www.instagram.com/completecare.official/" },
    { label: "YouTube", href: "https://www.youtube.com/c/CompleteCarePhysiotherapy" },
  ],
};

export type NavItem = { label: string; to: string };
export type NavGroup = { label: string; to?: string; items?: NavItem[] };

export const primaryNav: NavGroup[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    items: [
      { label: "Best Physiotherapy Clinic in Ahmedabad", to: "/best-physiotherapy-clinic-in-ahmedabad" },
      { label: "Best Physiotherapist in Ahmedabad", to: "/best-physiotherapist-in-ahmedabad" },
      { label: "Our Team", to: "/our-team" },
      { label: "Media", to: "/media" },
      { label: "Video", to: "/video" },
    ],
  },
  {
    label: "Conditions",
    items: [
      { label: "Neck Pain", to: "/neck-pain-treatment-doctor-in-ahmedabad" },
      { label: "Back Pain", to: "/back-pain-doctor-in-ahmedabad" },
      { label: "Knee Pain", to: "/knee-pain-treatment-in-ahmedabad" },
      { label: "Shoulder Pain", to: "/shoulder-pain-treatment-doctor-in-ahmedabad" },
      { label: "Sciatica", to: "/sciatica-pain-treatment-in-ahmedabad" },
      { label: "Slipped / Herniated Disc", to: "/slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad" },
      { label: "Spine & Neuro Rehab", to: "/best-neuro-spine-rehabilitation-centre-in-ahmedabad" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "All Physiotherapy Services", to: "/top-physiotherapy-services-center-in-ahmedabad" },
      { label: "Advanced Physical Therapy", to: "/advanced-physical-therapy-in-ahmedabad" },
      { label: "Electrotherapy", to: "/best-electro-therapy-in-ahmedabad" },
      { label: "PEMF Therapy", to: "/effective-pemf-therapy-in-ahmedabad" },
      { label: "Spine Decompression", to: "/spine-decompression-therapy-treatment-in-ahmedabad" },
      { label: "Class IV Laser Therapy", to: "/class-iv-laser-therapy-clinic-in-ahmedabad" },
      { label: "Fitness & Medical Fitness", to: "/top-fitness-centre-courses-in-ahmedabad" },
    ],
  },
  { label: "Chiropractic", to: "/chiropractic-treatment-in-ahmedabad" },
  { label: "Home Visit", to: "/physiotherapy-at-home-in-ahmedabad" },
  { label: "Blogs", to: "/blogs" },
];
