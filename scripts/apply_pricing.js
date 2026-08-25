import fs from "fs";
import path from "path";

const pricingData = {
  // --- 13 ORTHOPAEDIC CONDITIONS ---
  "neck-pain-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Detailed Doctor Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Neck Pain Treatment & Therapy Pricing",
    context: "Therapy session pricing ranges between ₹500 and ₹2,000 depending on whether your protocol requires hands on cervical joint mobilization, computerized cervical traction, or deep tissue Class IV laser therapy. Transparent charges are discussed during your initial evaluation.",
    inclusions: ["Physiotherapist-led cervical evaluation", "Manual therapy & gentle mobilization", "Ergonomic & posture home guidance", "No hidden facility fees"]
  },
  "back-pain-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Comprehensive Spine Evaluation)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Lower Back Pain Care & Therapy Pricing",
    context: "Therapy session fees range from ₹500 to ₹2,000 depending on the prescribed combination of spinal decompression tables, targeted electrotherapy (TECAR/PEMF), and customized core stability training. Treatment packages are customized to your recovery timeline.",
    inclusions: ["Doctor-led lumbar examination", "Advanced pain-modulating modalities", "Core stabilizer neuromuscular retraining", "Transparent treatment plans"]
  },
  "knee-pain-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Joint & Gait Biomechanical Evaluation)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Knee Pain Rehabilitation & Therapy Pricing",
    context: "Knee osteoarthritis and ligament therapy rates range between ₹500 and ₹2,000 depending on the use of specialized cellular healing modalities (PEMF, Class IV Laser) and hands-on patellar mobilization versus progressive kinetic chain loading.",
    inclusions: ["Detailed knee joint mobility testing", "Targeted cartilage & tendon therapies", "Progressive kinetic chain strengthening", "Clear per-session pricing"]
  },
  "shoulder-pain-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Rotator Cuff & Scapular Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Shoulder Care & Therapy Pricing",
    context: "Shoulder impingement and rotator cuff therapy sessions range from ₹500 to ₹2,000 depending on requirements for manual soft tissue release, therapeutic ultrasound, dry needling, and progressive rotator cuff resistance retraining.",
    inclusions: ["Specialized shoulder orthopedic tests", "Hands-on joint capsule therapy", "Scapulothoracic muscle retraining", "Doctor-monitored milestones"]
  },
  "frozen-shoulder-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Capsular Staging & Motion Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Frozen Shoulder Therapy Pricing",
    context: "Adhesive capsulitis therapy costs range from ₹500 to ₹2,000 per session depending on the clinical stage (freezing, frozen, or thawing), combining intensive Maitland joint mobilizations with thermal deep heat modalities and active range recovery techniques.",
    inclusions: ["Clinical stage identification", "Pain-free grade mobilizations", "Home pendulum & pulley plan", "Customized multi-session packages"]
  },
  "sciatica-pain-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Nerve Root & Straight Leg Screening)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Sciatica Nerve Decompression & Therapy Pricing",
    context: "Sciatica therapy fees range between ₹500 and ₹2,000 per session based on the severity of nerve root irritation and the inclusion of non surgical computerized spinal traction, neurodynamic nerve flossing, and PEMF cellular relief.",
    inclusions: ["Neural tension diagnostic testing", "Computerized spinal decompression", "Nerve flossing & core stabilization", "Honest, milestone-based fees"]
  },
  "slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (MRI Correlation & Spine Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Slipped Disc Decompression & Therapy Pricing",
    context: "Herniated and bulging disc therapy pricing ranges between ₹500 and ₹2,000 per session depending on the specialized use of US-FDA approved spinal decompression tables, high intensity Class IV laser, and physician-supervised McKenzie directional preference care.",
    inclusions: ["MRI-correlated clinical examination", "Advanced spinal decompression tables", "McGill core stabilization protocol", "Transparent rehabilitation structure"]
  },
  "ankle-pain-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Ligament Stability & Balance Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Ankle Rehabilitation & Therapy Pricing",
    context: "Ankle sprain and tendonitis therapy sessions range from ₹500 to ₹2,000 depending on joint mobilization requirements, therapeutic ultrasound, kinesio taping, and balance board proprioception retraining.",
    inclusions: ["Ankle joint stability evaluation", "Edema reduction & manual therapy", "Proprioceptive balance training", "Clear, affordable per-visit fees"]
  },
  "best-doctor-for-tennis-elbow-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Tendon & Grip Strength Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Tennis Elbow Therapy Pricing",
    context: "Epicondylitis therapy rates range between ₹500 and ₹2,000 per session, covering eccentric tendon loading regimens, therapeutic dry needling, deep tissue friction massage, and ergonomic forearm brace prescription.",
    inclusions: ["Tendon tenderness & grip evaluation", "Dry needling & soft tissue work", "Eccentric tendon loading program", "Ergonomic workplace guidance"]
  },
  "top-rheumatoid-arthritis-specialist-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Multi-Joint Flare Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Rheumatoid Arthritis Care & Therapy Pricing",
    context: "Rheumatoid arthritis physiotherapy sessions range from ₹500 to ₹2,000 based on gentle non-impact joint protection therapy, soothing paraffin wax baths, circulation enhancement, and energy conservation training.",
    inclusions: ["Gentle range of motion screening", "Warm paraffin wax bath therapy", "Joint sparing ergonomic coaching", "Customized chronic care pricing"]
  },
  "sports-physiotherapist-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Athletic Movement & Return-to-Play Screening)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Sports Injury Rehabilitation & Therapy Pricing",
    context: "Sports rehabilitation therapy rates range between ₹500 and ₹2,000 per session, structured around functional movement screening, instrument-assisted soft tissue mobilization (IASTM), neuromuscular agility drills, and return-to-sport testing.",
    inclusions: ["Biomechanical movement evaluation", "high performance return-to-play drills", "IASTM & sports kinesio taping", "Transparent athletic rehab fees"]
  },
  "top-vertigo-specialist-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Vestibular & Balance Diagnostic Review)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Vestibular Rehab & Therapy Pricing",
    context: "Vestibular therapy fees range from ₹500 to ₹2,000 depending on the number of Epley or canalith repositioning manoeuvres needed to clear inner ear crystals, alongside customized gaze stabilization and habituation exercises.",
    inclusions: ["Dix-Hallpike positional testing", "Canalith repositioning maneuvers", "Gaze stability & balance drills", "Focused, outcome-based sessions"]
  },
  "osteoporosis-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Bone Health & Fall Risk Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Osteoporosis Exercise & Therapy Pricing",
    context: "Bone-loading therapy sessions range between ₹500 and ₹2,000, based on physiotherapist-supervised progressive mechanical resistance routines, balance perturbation training, and spine-sparing postural coaching.",
    inclusions: ["Comprehensive fall-risk evaluation", "Safe, supervised bone-loading exercises", "Postural spine-sparing education", "Affordable long-term packages"]
  },

  // --- 8 SPINE & NEUROLOGICAL CONDITIONS ---
  "spinal-cord-specialist-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Comprehensive Neurological Evaluation)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Spinal Cord Injury Neuro Rehab Therapy Pricing",
    context: "Spinal cord injury neuro-rehabilitation therapy sessions range from ₹500 to ₹2,000, involving dedicated 1-on-1 neuromuscular re-education, functional electrical stimulation (FES), specialized transfer coaching, and bodyweight-supported gait retraining.",
    inclusions: ["Detailed motor & sensory mapping", "Neuromuscular electrical stimulation", "Wheelchair & transfer training", "Dedicated 1-on-1 clinical specialist"]
  },
  "stroke-in-treatment-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Stroke Recovery & Motor Screening)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Stroke Rehabilitation & Therapy Pricing",
    context: "Stroke recovery therapy rates range between ₹500 and ₹2,000 depending on whether intensive sessions are delivered in our specialized neuro-rehab centre (with body-weight support & PNF) or as doorstep home physiotherapy visits.",
    inclusions: ["Neuro-developmental (Bobath/NDT) therapy", "Spasticity reduction & gait training", "Upper extremity motor retraining", "Home visit options across Ahmedabad"]
  },
  "parkinson-disease-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Motor Amplitude & Balance Evaluation)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Parkinson's Physiotherapy & Therapy Pricing",
    context: "Parkinson's disease rehabilitation therapy fees range from ₹500 to ₹2,000 per session, reflecting specialized high amplitude movement protocols, sensory cueing strategies, gait freeze management, and functional flexibility training.",
    inclusions: ["Postural stability & freezing assessment", "Large-amplitude motor coaching", "Rhythmic auditory cueing routines", "Patient & caregiver education"]
  },
  "muscular-dystrophy-doctor-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Mobility & Respiratory Status Review)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Muscular Dystrophy Therapy Pricing",
    context: "Muscular dystrophy therapy sessions range between ₹500 and ₹2,000, covering gentle non-fatiguing active-assisted exercises, contracture prevention stretching, chest physiotherapy, and orthotic positioning guidance.",
    inclusions: ["Gentle contracture risk screening", "Passive-assisted joint preservation", "Breathing & chest clearance support", "Comfort-focused adaptive plans"]
  },
  "multiple-sclerosis-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Fatigue & Spasticity Clinical Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Multiple Sclerosis Therapy Pricing",
    context: "Multiple sclerosis management therapy rates range from ₹500 to ₹2,000 per session depending on personalized energy-conservation plans, temperature-regulated core strengthening, ataxia management, and gait stability retraining.",
    inclusions: ["Individualized energy-sparing assessment", "Spasticity management & stretching", "Balance & coordinated gait retraining", "Flexible scheduling for fatigue control"]
  },
  "cerebral-palsy-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Paediatric Developmental & Tone Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Cerebral Palsy Paediatric Therapy Pricing",
    context: "Paediatric cerebral palsy therapy pricing ranges between ₹500 and ₹2,000 per session, structured around developmental milestone progression, sensory-motor stimulation, spasticity control, and family-centered home exercise guidance.",
    inclusions: ["Gross Motor Function (GMFM) tracking", "Play-based neuro-motor facilitation", "Posture & orthotic positioning", "Comprehensive parent coaching"]
  },
  "bells-palsy-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Facial Nerve & Symmetry Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Bell's Palsy Therapy Pricing",
    context: "Facial rehabilitation therapy rates range from ₹500 to ₹2,000 based on gentle electrical muscle stimulation, targeted neuromuscular facial re-education exercises, and eye protection protocols.",
    inclusions: ["Facial muscle grading (House-Brackmann)", "Gentle galvanic / faradic stimulation", "Facial PNF expression re-education", "Transparent recovery pricing"]
  },
  "diabetic-neuropathy-treatment-doctor-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Sensory & Foot Biomechanical Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Diabetic Neuropathy Therapy Pricing",
    context: "Neuropathy therapy fees range between ₹500 and ₹2,000 per session, covering circulation-enhancing modalities, sensory retraining exercises, balance perturbation drills, and preventive diabetic foot care education.",
    inclusions: ["Monofilament sensory testing", "Circulation-boosting modalities", "Fall prevention & balance training", "Clear per-session fee structure"]
  },

  // --- 10 MEDICAL FITNESS & RECOVERY ---
  "top-fitness-centre-courses-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Posture & Functional Movement Screening)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Medical Fitness & Therapy Pricing",
    context: "Medical fitness therapy pricing ranges from ₹500 to ₹2,000, structured around individual physiotherapist supervision, biomechanical movement corrections, joint-safe strengthening, and personalized wellness plans.",
    inclusions: ["Full-body movement screen", "Physiotherapist-supervised workouts", "Posture & core correction drills", "Transparent membership & session passes"]
  },
  "best-aerobics-classes-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Cardiovascular & Joint Safety Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Aerobics Class & Therapy Pricing",
    context: "Aerobics session pricing ranges between ₹500 and ₹2,000 depending on individual personal coaching versus small group classes, designed to maximize calorie burn and endurance with zero joint strain.",
    inclusions: ["Heart rate & fitness baseline check", "high energy, low-impact routines", "Physiotherapy-guided joint safety", "Flexible monthly & drop-in plans"]
  },
  "step-aerobics-physiotherapy-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Lower Limb Alignment & Step Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Step Aerobics Therapy Pricing",
    context: "Step aerobics rates range from ₹500 to ₹2,000, covering personalized step height calibration, rhythmic lower body strength drills, ankle/knee stability coaching, and cardiovascular conditioning.",
    inclusions: ["Biomechanical step height setup", "Rhythmic cardiovascular choreography", "Ankle & knee stability focus", "Affordable session & batch pricing"]
  },
  "hiit-training-workouts-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Metabolic & Musculoskeletal Screening)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated HIIT Training & Supervised Therapy Pricing",
    context: "Physiotherapist-supervised HIIT therapy rates range from ₹500 to ₹2,000 per session, covering personalized interval timing, heart rate monitoring, and joint-protective movement execution to prevent workout injuries.",
    inclusions: ["Cardiovascular capacity check", "Custom interval work-to-rest ratios", "Supervised form & spine protection", "Transparent package options"]
  },
  "top-strength-training-studio-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Strength Baseline & Form Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Strength Training & Therapy Pricing",
    context: "Strength therapy fees range between ₹500 and ₹2,000 per session, tailored for one-on-one progressive resistance training, bone-loading routines, barbell and dumbbell technique correction, and core development.",
    inclusions: ["Baseline strength & movement screening", "Personalized resistance periodization", "Safe lifting mechanics coaching", "No hidden equipment charges"]
  },
  "zumba-classes-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Fitness & Mobility Screening)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Zumba Fitness & Therapy Pricing",
    context: "Zumba fitness rates range from ₹500 to ₹2,000 depending on drop-in passes versus monthly memberships, offering dynamic dance-based interval training in an energizing, supportive clinical environment.",
    inclusions: ["Pre-class mobility check", "high energy Latin & global rhythms", "Low-impact joint modification", "Flexible batch & monthly passes"]
  },
  "pilates-studio-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Core & Spinal Alignment Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Clinical Pilates & Therapy Pricing",
    context: "Clinical Pilates pricing ranges between ₹500 and ₹2,000 per session between private one-on-one reformer-style sessions and small group mat classes focused on core activation, pelvic stability, and spinal posture.",
    inclusions: ["Spinal alignment & core screening", "Deep transverse abdominis activation", "Equipment & mat work instruction", "Personalized postural plans"]
  },
  "best-power-yoga-classes-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Flexibility & Breath Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Power Yoga & Therapy Pricing",
    context: "Power yoga rates range from ₹500 to ₹2,000 depending on private alignment coaching versus group vinyasa flows, combining dynamic strength, flexibility, and controlled breathing with physiotherapist oversight.",
    inclusions: ["Joint range of motion check", "Dynamic vinyasa flow coaching", "Breathwork & alignment guidance", "Affordable monthly passes"]
  },
  "ball-band-training-physiotherapy-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Core Stability & Balance Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Ball & Band Therapy Pricing",
    context: "Swiss ball and resistance band session rates range between ₹500 and ₹2,000, covering perturbation balance training, eccentric elastic loading, and personalized progressive home exercise kit instruction.",
    inclusions: ["Core stability baseline testing", "Swiss ball posture & balance drills", "Resistance band progression plan", "Clear, transparent pricing"]
  },
  "stretching-physiotherapy-treatment-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Muscle Length & Flexibility Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Therapeutic Stretching & Therapy Pricing",
    context: "Therapeutic stretching fees range from ₹500 to ₹2,000, covering hands-on PNF (proprioceptive neuromuscular facilitation) contract-relax techniques, active isolated stretches, and postural muscle lengthening.",
    inclusions: ["Goniometric flexibility screening", "Hands-on PNF assisted stretching", "Myofascial tension release", "Customized daily stretch prescription"]
  },
  "female-fitness-trainer-in-ahmedabad.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Women's Health & Postnatal Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Women's Fitness & Therapy Pricing",
    context: "Specialized women's health and medical fitness pricing ranges from ₹500 to ₹2,000, tailored to prenatal/postnatal care, diastasis recti recovery, pelvic floor conditioning, and strength training guided by Dr. Foram Patel.",
    inclusions: ["Specialized female health screening", "Diastasis recti & core evaluation", "Physiotherapist-guided strength workouts", "Transparent, tailored packages"]
  },
  "online-fitness-classes.ts": {
    range: "₹500 – ₹2,000",
    consultationFee: "₹500 (Virtual Movement & Ergonomics Assessment)",
    treatmentRange: "₹500 – ₹2,000 / session",
    lowPrice: 500,
    highPrice: 2000,
    title: "Estimated Online Fitness & Therapy Pricing",
    context: "Live online physiotherapy and fitness sessions range from ₹500 to ₹2,000, offering 1-on-1 and small group video guidance from experienced clinical trainers from the comfort of home.",
    inclusions: ["Live 1-on-1 HD video session", "Real-time posture & form feedback", "Home equipment adaptations", "Transparent per-class & monthly plans"]
  }
};

const pagesDir = path.join(process.cwd(), "src", "content", "pages");

let updatedCount = 0;

for (const [fileName, priceInfo] of Object.entries(pricingData)) {
  const filePath = path.join(pagesDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${fileName}`);
    continue;
  }

  let code = fs.readFileSync(filePath, "utf-8");

  const pricingBlockCode = `    {
      t: "pricing",
      title: ${JSON.stringify(priceInfo.title)},
      range: ${JSON.stringify(priceInfo.range)},
      consultationFee: ${JSON.stringify(priceInfo.consultationFee)},
      treatmentRange: ${JSON.stringify(priceInfo.treatmentRange)},
      lowPrice: ${priceInfo.lowPrice},
      highPrice: ${priceInfo.highPrice},
      currency: "INR",
      context: ${JSON.stringify(priceInfo.context)},
      inclusions: ${JSON.stringify(priceInfo.inclusions, null, 8).replace(/^ {8}/gm, "        ").trim()},
    },
`;

  // If already has pricing block, replace it cleanly
  const existingPricingPattern = /[ \t]*\{\s*t:\s*"pricing"[\s\S]*?\},\n/m;
  if (existingPricingPattern.test(code)) {
    code = code.replace(existingPricingPattern, pricingBlockCode);
    fs.writeFileSync(filePath, code, "utf-8");
    console.log(`Replaced pricing in ${fileName}`);
    updatedCount++;
    continue;
  }

  // Otherwise insert before callout / doctor
  const calloutPattern = /([ \t]*\{\s*t:\s*"callout"[\s\S]*?variant:\s*"warning"[\s\S]*?\})/m;
  const genericCalloutPattern = /([ \t]*\{\s*t:\s*"callout"[\s\S]*?\})/m;
  const doctorPattern = /([ \t]*\{\s*t:\s*"doctor"[\s\S]*?\})/m;

  let inserted = false;

  if (calloutPattern.test(code)) {
    code = code.replace(calloutPattern, (match) => `${pricingBlockCode}${match}`);
    inserted = true;
  } else if (genericCalloutPattern.test(code)) {
    code = code.replace(genericCalloutPattern, (match) => `${pricingBlockCode}${match}`);
    inserted = true;
  } else if (doctorPattern.test(code)) {
    code = code.replace(doctorPattern, (match) => `${pricingBlockCode}${match}`);
    inserted = true;
  }

  if (inserted) {
    fs.writeFileSync(filePath, code, "utf-8");
    console.log(`Successfully updated ${fileName}`);
    updatedCount++;
  } else {
    console.error(`Could not find insertion point in ${fileName}`);
  }
}

console.log(`Total files updated: ${updatedCount}`);
