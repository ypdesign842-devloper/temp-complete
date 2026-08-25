export type Testimonial = {
  name: string;
  quote: string;
  rating: number;
  location?: string;
  treatment?: string;
};

export const testimonials: Testimonial[] = [
  // 1. English (Clinical Spine & Decompression)
  {
    name: "Amit Desai",
    location: "Thaltej, Ahmedabad",
    treatment: "Spinal Decompression & PEMF",
    quote: "Underwent non surgical  spinal decompression and PEMF therapy for severe L4-L5 disc slip. Within 3 weeks, my sciatica nerve pain dropped from 9/10 to zero. Dr. Hardik Patel's team is exceptional.",
    rating: 5,
  },
  // 2. Gujarati in English text (Knee Pain)
  {
    name: "Rupal Patel",
    location: "Thaltej, Ahmedabad",
    treatment: "Knee Pain & Cartilage Rehab",
    quote: "Mara knee pain ma bahu sari rahat mali. Complete Care Thaltej na staff no nature khub j saras ane cooperative chhe. Advance machines ane doctor na guidance thi fast relief mali.",
    rating: 5,
  },
  // 3. Hinglish / Hindi in English text (Back Spasm)
  {
    name: "Krupa Joshi",
    location: "Gota, Ahmedabad",
    treatment: "Chiropractic & Back Care",
    quote: "Dr. Hardik Patel sir ne problem ko bohot deep samajh ke treatment plan banaya. Back spasm aur severe leg pain bilkul theek ho gaya bina kisi heavy medication ke.",
    rating: 5,
  },
  // 4. Gujarati in English text (Frozen Shoulder)
  {
    name: "Harshad Patel",
    location: "Gota, Ahmedabad",
    treatment: "Frozen Shoulder & Laser",
    quote: "Dr. Hardik Patel sir ane Dr. Foram madam nu guidance khub j uttam chhe. Maru shoulder frozen hatu, 15 divas ma 90% hath upar thava lagyo. Khub khub aabhar!",
    rating: 5,
  },
  // 5. English (Sports Rehab)
  {
    name: "Kunal Joshi",
    location: "South Bopal, Ahmedabad",
    treatment: "ACL & Sports Injury Rehab",
    quote: "Post ACL reconstruction rehabilitation was handled with utmost precision. The progressive strength training, Tecar therapy, and joint mobilization got me back on the court in record time.",
    rating: 5,
  },
  // 6. Hinglish (Neck & Cervical)
  {
    name: "Nirali Shah",
    location: "South Bopal, Ahmedabad",
    treatment: "Cervical Spondylosis",
    quote: "Bohot hi professional approach hai. Laser therapy aur precision chiropractic alignment ke baad neck stiffness aur severe headache mein 100% relief mila. Staff bohot humble hai.",
    rating: 5,
  },
  // 7. Gujarati in English text (Lumbar Herniation)
  {
    name: "Jignesh Mehta",
    location: "South Bopal, Ahmedabad",
    treatment: "Lumbar Disc Decompression",
    quote: "Bahu j saras experience rahyo. Mane lumbar disc herniation hatu ane doctor e surgery vagar decompression therapy thi pura dard ma thi mukti apavi. Best clinic in Gujarat!",
    rating: 5,
  },
  // 8. Gujarati in English text (Elderly Back Pain)
  {
    name: "Bhavika Desai",
    location: "Nikol, Ahmedabad",
    treatment: "Senior Care & Posture",
    quote: "Mara mother ne severe back pain hatu. Nikol branch par treatment lidhi ane 10 divas ma walker vagar chalva lagya. Staff khub prem ane patience thi exercise karave chhe.",
    rating: 5,
  },
  // 9. English (Chronic Cervical)
  {
    name: "Mihir Shah",
    location: "Nikol, Ahmedabad",
    treatment: "Class IV Laser & Manual Therapy",
    quote: "Visited Complete Care for chronic cervical spondylosis and shoulder radiating pain. The combination of Class IV Laser and manual joint mobilization gave me immense relief from day one.",
    rating: 5,
  },
  // 10. Hinglish (Neuro Rehab)
  {
    name: "Pradeep Sharma",
    location: "Nikol, Ahmedabad",
    treatment: "Stroke & Neuro Rehabilitation",
    quote: "Father ke post-stroke neuro rehabilitation ke liye aaye the. Therapists ne bohot patience ke sath har movement train karwaya. Today he is walking independently. Highly recommended!",
    rating: 5,
  },
  // 11. Gujarati in English text (Mehsana Clinic)
  {
    name: "Dhaval Patel",
    location: "Mehsana Clinic",
    treatment: "Knee Osteoarthritis",
    quote: "Mehsana ma aavi world-class physiotherapy facility mali te khub j saras vaat chhe. Machines badha advanced chhe ane doctor exercise bahu saras rite samjave chhe.",
    rating: 5,
  },
  // 12. English (Mehsana Diagnosis)
  {
    name: "Rakesh Thakkar",
    location: "Mehsana Clinic",
    treatment: "Sciatica & Spine Care",
    quote: "Best physiotherapy centre in Mehsana. Dr. Hardik's clinical diagnosis was spot-on and the staff guided me through every home exercise with great care and attention.",
    rating: 5,
  },
  // 13. Gujarati in English text (Ankleshwar Clinic)
  {
    name: "Komal Mehta",
    location: "Ankleshwar Clinic",
    treatment: "Sciatica & Disc Care",
    quote: "Ankleshwar center par sciatica mate treatment karavi. Pehla be divas ma j bahu motu farak padi gayo. Complete Care team is truly the best physiotherapy team across Gujarat.",
    rating: 5,
  },
  // 14. English (Ankleshwar Clinic)
  {
    name: "Sanjay Shah",
    location: "Ankleshwar Clinic",
    treatment: "Post-Fracture Joint Mobility",
    quote: "Highly recommend Complete Care Ankleshwar for post-fracture joint stiffness. The therapists are certified and provide focused 1-on-1 care throughout every 45-minute clinical session.",
    rating: 5,
  },
  // 15. Hinglish (Knee Osteoarthritis)
  {
    name: "Pooja Patel",
    location: "Thaltej, Ahmedabad",
    treatment: "Knee Osteoarthritis Rehab",
    quote: "Mera knee osteoarthritis ka treatment chal raha hai. Advanced electrotherapy aur targeted quadriceps exercises se ab stairs chadhna bohot aasan ho gaya hai. Very satisfied!",
    rating: 5,
  },
  // 16. English (Hygiene & FDA Tech)
  {
    name: "Hetal Shah",
    location: "Gota, Ahmedabad",
    treatment: "Cervical & Posture Alignment",
    quote: "Very clean and hygienic clinic with US-FDA approved laser and decompression systems. The personalized exercise chart and milestone tracking made our recovery seamless.",
    rating: 5,
  },
  // 17. Hinglish (Home Visit Service)
  {
    name: "Anjali Trivedi",
    location: "Doorstep Home Care, Ahmedabad",
    treatment: "post surgical  Home Visit",
    quote: "Humne doctor ke kehne par home visit physiotherapy li thi Ahmedabad mein. Senior therapist time par aate the aur bohot dedicated tareeqe se home exercises complete karwaye.",
    rating: 5,
  },
  // 18. Hinglish / English (Medical Fitness Lead)
  {
    name: "Chirag Raval",
    location: "Thaltej, Ahmedabad",
    treatment: "Sports Spine & Supervised Fitness",
    quote: "Excellent clinical centre for sports injury and spine care. Supervised medical fitness and core strengthening after pain relief ensured problem dubara kabhi na ho. 5 star experience!",
    rating: 5,
  },
];

export const reviewSummary = "4.9 ★ Rated on Google Across 6 Gujarat Clinics (85,000+ Patient Recoveries)";
