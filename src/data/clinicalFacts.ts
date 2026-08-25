import type { ContentPage } from "./types";

export type HeroFact = {
  label: string;
  value: string;
  subtext?: string;
  icon: "Clock" | "Calendar" | "TrendingUp" | "ShieldCheck" | "Zap" | "Activity" | "HeartPulse" | "Dumbbell";
};

// Comprehensive, medically responsible clinical facts for each specific Complete Care route
const specificFactsBySlug: Record<string, [HeroFact, HeroFact, HeroFact, HeroFact]> = {
  // ==========================================
  // ORTHOPAEDIC CONDITIONS
  // ==========================================
  "neck-pain-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Assessment & hands-on care", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "6 to 12 Sessions", subtext: "Based on cervical assessment", icon: "Calendar" },
    { label: "EXPECTED RELIEF", value: "2 to 3 Weeks", subtext: "Progressive pain reduction", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Posture & Joint Mobilisation", subtext: "Targeted cervical rehabilitation", icon: "ShieldCheck" },
  ],
  "back-pain-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Spinal assessment & therapy", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "8 to 14 Sessions", subtext: "Phased treatment plan", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "Gradual Improvement", subtext: "Core stability & mobility gain", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "non surgical  Spine Care", subtext: "Decompression + Core Rehab", icon: "ShieldCheck" },
  ],
  "knee-pain-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Joint therapy & exercises", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "8 to 15 Sessions", subtext: "Depends on joint stage / injury", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "3 to 6 Weeks", subtext: "Cartilage support & strength", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "PEMF & Quad Strengthening", subtext: "Joint preservation protocol", icon: "ShieldCheck" },
  ],
  "shoulder-pain-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Scapular & rotator cuff work", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "6 to 12 Sessions", subtext: "Tailored to impingement stage", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "Gradual Range Gain", subtext: "Overhead movement restored", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Manual Therapy & Taping", subtext: "Scapular rhythm correction", icon: "ShieldCheck" },
  ],
  "frozen-shoulder-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Capsular stretching & mobilisations", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "10 to 18 Sessions", subtext: "Stage-specific care plan", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "Phased Range Recovery", subtext: "From pain freezing to thawing", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Capsular Mobilisation", subtext: "Laser, gentle stretch & home physio", icon: "ShieldCheck" },
  ],
  "sciatica-pain-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Spine decompression & nerve work", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "8 to 16 Sessions", subtext: "Until radiation subsides", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "2 to 4 Weeks Initial Relief", subtext: "Progressive nerve desensitisation", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Spine Decompression", subtext: "Targeted nerve root relief", icon: "ShieldCheck" },
  ],
  "slipped-herniated-disc-physiotherapy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "50 to 60 Minutes", subtext: "Computerised traction & rehab", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "12 to 20 Sessions", subtext: "US-FDA disc protocol", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "3 to 6 Weeks Phased Care", subtext: "Disc retraction & nerve release", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "non surgical  Disc Decompression", subtext: "Deep core stabilisation", icon: "ShieldCheck" },
  ],
  "ankle-pain-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "40 to 50 Minutes", subtext: "Ligament & balance training", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "6 to 10 Sessions", subtext: "Acute to return-to-walk", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "2 to 4 Weeks", subtext: "Stability & swelling reduction", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Proprioception & Taping", subtext: "Strengthening & balance board", icon: "ShieldCheck" },
  ],
  "best-doctor-for-tennis-elbow-in-ahmedabad": [
    { label: "SESSION DURATION", value: "35 to 45 Minutes", subtext: "Tendon loading & therapy", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "6 to 10 Sessions", subtext: "Based on chronicity", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "3 to 5 Weeks", subtext: "Grip strength & tendon healing", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Dry Needling & Laser", subtext: "Eccentric wrist rehab", icon: "ShieldCheck" },
  ],
  "top-rheumatoid-arthritis-specialist-in-ahmedabad": [
    { label: "SESSION DURATION", value: "40 to 50 Minutes", subtext: "Gentle joint protection", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "Regular Maintenance", subtext: "Symptom flare management", icon: "Calendar" },
    { label: "EXPECTED BENEFIT", value: "Stiffness & Pain Relief", subtext: "Joint preservation", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Paraffin Bath & Gentle Physio", subtext: "Preserving daily independence", icon: "ShieldCheck" },
  ],
  "sports-physiotherapist-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "hig performance rehab", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "6 to 14 Sessions", subtext: "Injury to return-to-sport", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "Functional Milestones", subtext: "Biomechanical progression", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Sport-Specific Conditioning", subtext: "IASTM, Taping & Agility drills", icon: "ShieldCheck" },
  ],
  "top-vertigo-specialist-in-ahmedabad": [
    { label: "SESSION DURATION", value: "30 to 45 Minutes", subtext: "Vestibular assessment & manoeuvres", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "3 to 6 Sessions", subtext: "Often fast symptomatic resolution", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "1 to 2 Weeks", subtext: "Gaze stability & dizziness clear", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Epley & Vestibular Rehab", subtext: "Canalith repositioning & balance", icon: "ShieldCheck" },
  ],
  "osteoporosis-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 50 Minutes", subtext: "Safe bone-loading exercise", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "Long-Term Program", subtext: "Twice or thrice weekly", icon: "Calendar" },
    { label: "EXPECTED BENEFIT", value: "Bone Density & Balance", subtext: "Fall prevention assurance", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Supervised Weight Bearing", subtext: "Posture & spinal protection", icon: "ShieldCheck" },
  ],

  // ==========================================
  // SPINE & NEUROLOGICAL REHABILITATION
  // ==========================================
  "spinal-cord-specialist-in-ahmedabad": [
    { label: "SESSION DURATION", value: "60 to 75 Minutes", subtext: "Intensive 1-on-1 neuro therapy", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "Phased Neuro Program", subtext: "Continuous multi-week care", icon: "Calendar" },
    { label: "RECOVERY GOAL", value: "Maximal Independence", subtext: "Neuro-plasticity & trunk control", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Neuromuscular Re-education", subtext: "Gait training & electrical stim", icon: "ShieldCheck" },
  ],
  "stroke-in-treatment-ahmedabad": [
    { label: "SESSION DURATION", value: "60 to 75 Minutes", subtext: "One on one motor retraining", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "12 to 24+ Sessions", subtext: "Early recovery window priority", icon: "Calendar" },
    { label: "RECOVERY GOAL", value: "Gait & Upper Limb Function", subtext: "Balance and motor control", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Neuro-Developmental Therapy", subtext: "Repetitive task practice & stim", icon: "ShieldCheck" },
  ],
  "parkinson-disease-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Amplitude & balance drills", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "Ongoing Maintenance", subtext: "Slowing progression & mobility", icon: "Calendar" },
    { label: "RECOVERY GOAL", value: "Freezing Reduction & Gait", subtext: "Postural stability gains", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "LSVT-Style Large Movement", subtext: "Dual-task gait conditioning", icon: "ShieldCheck" },
  ],
  "muscular-dystrophy-doctor-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Gentle contracture prevention", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "Continuous Support", subtext: "Comfort & mobility preservation", icon: "Calendar" },
    { label: "TREATMENT GOAL", value: "Maintain Functional Tone", subtext: "Respiratory & joint flexibility", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Gentle Passive/Active Physio", subtext: "Family training & positioning", icon: "ShieldCheck" },
  ],
  "multiple-sclerosis-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Fatigue-monitored rehabilitation", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "Phased Sessions", subtext: "Adapted around energy levels", icon: "Calendar" },
    { label: "TREATMENT GOAL", value: "Energy & Balance Control", subtext: "Spasticity management", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Individualized Neuro Rehab", subtext: "Core strength & gait training", icon: "ShieldCheck" },
  ],
  "cerebral-palsy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "50 to 60 Minutes", subtext: "Paediatric motor development", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "Developmental Milestones", subtext: "Regular weekly sessions", icon: "Calendar" },
    { label: "TREATMENT GOAL", value: "Mobility & Postural Control", subtext: "Preventing joint contractures", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Play-Based Neurophysiotherapy", subtext: "Sensory & tone management", icon: "ShieldCheck" },
  ],
  "bells-palsy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "35 to 45 Minutes", subtext: "Facial muscle stimulation", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "6 to 12 Sessions", subtext: "Until facial symmetry returns", icon: "Calendar" },
    { label: "RECOVERY TIMELINE", value: "3 to 6 Weeks", subtext: "Facial nerve regeneration", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Facial Muscle Re-education", subtext: "Gentle stimulation & biofeedback", icon: "ShieldCheck" },
  ],
  "diabetic-neuropathy-treatment-doctor-in-ahmedabad": [
    { label: "SESSION DURATION", value: "40 to 50 Minutes", subtext: "Sensory & circulation therapy", icon: "Clock" },
    { label: "TYPICAL VISITS", value: "8 to 14 Sessions", subtext: "Progressive nerve support", icon: "Calendar" },
    { label: "TREATMENT GOAL", value: "Sensory Recovery & Balance", subtext: "Fall risk reduction", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Circulation & Balance Therapy", subtext: "Foot care & sensory re-education", icon: "ShieldCheck" },
  ],

  // ==========================================
  // ADVANCED CLINICAL MODALITIES & ELECTROTHERAPY
  // ==========================================
  "effective-pemf-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "30 to 45 Minutes", subtext: "Pulsed electromagnetic waves", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "8 to 15 Sessions", subtext: "Cumulative cellular healing", icon: "Calendar" },
    { label: "EXPECTED RESPONSE", value: "Reduced Joint Swelling", subtext: "Deep cartilage regeneration", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "high frequency PEMF", subtext: "Hospital grade pulsed fields", icon: "Zap" },
  ],
  "spine-decompression-therapy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "40 to 50 Minutes", subtext: "Computerized axial cycle", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "10 to 20 Sessions", subtext: "US FDA approved table protocol", icon: "Calendar" },
    { label: "EXPECTED BENEFIT", value: "Disc Pressure Relief", subtext: "Negative intradiscal vacuum", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "US FDA Spine Decompression", subtext: "Targeted vertebral distraction", icon: "ShieldCheck" },
  ],
  "class-iv-laser-therapy-clinic-in-ahmedabad": [
    { label: "SESSION DURATION", value: "20 to 30 Minutes", subtext: "Deep-tissue photon energy", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 10 Sessions", subtext: "Accelerated cellular ATP", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Rapid Anti-Inflammatory", subtext: "Pain relief from 1st-2nd session", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Class IV hig Power Laser", subtext: "Dual wavelength deep therapy", icon: "Zap" },
  ],
  "tecar-physiotherapy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "30 to 40 Minutes", subtext: "Capacitive & resistive diathermy", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 10 Sessions", subtext: "Targeted endogenous heat", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Deep Tissue Relaxation", subtext: "Enhanced vascular perfusion", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "TECAR Radiofrequency", subtext: "Joint, muscle & fascia recovery", icon: "Zap" },
  ],
  "best-electro-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "30 to 45 Minutes", subtext: "Custom electrotherapy suite", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 12 Sessions", subtext: "Paired with active exercise", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Pain Gate Modulation", subtext: "Spasm and oedema reduction", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Comprehensive Electrotherapy", subtext: "TENS, IFT, SWD & ultrasound", icon: "Zap" },
  ],
  "best-ift-treatment-center-in-ahmedabad": [
    { label: "SESSION DURATION", value: "20 to 30 Minutes", subtext: "Interferential 4-pole therapy", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 10 Sessions", subtext: "Acute to chronic pain phases", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Deep Pain Blocking", subtext: "Endorphin stimulation & recovery", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Interferential (IFT)", subtext: "Medium frequency stimulation", icon: "Zap" },
  ],
  "effective-tens-treatment-in-ahmedabad-for-pain-relief": [
    { label: "SESSION DURATION", value: "20 to 30 Minutes", subtext: "Sensory nerve stimulation", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "5 to 10 Sessions", subtext: "Used during rehab phases", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Fast Analgesic Effect", subtext: "Activates pain gate mechanism", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "TENS Neuromodulation", subtext: "non invasive surface therapy", icon: "Zap" },
  ],
  "top-short-wave-diathermy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "20 to 30 Minutes", subtext: "high frequency deep heat", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 10 Sessions", subtext: "Before manual mobilisations", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Muscle Spasm Release", subtext: "Deep joint warming", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Continuous / Pulsed SWD", subtext: "27.12 MHz clinical diathermy", icon: "Zap" },
  ],
  "best-electrical-stimulation-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "25 to 35 Minutes", subtext: "Targeted motor nerve activation", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "8 to 15 Sessions", subtext: "Muscle re-education plan", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Muscle Re-activation", subtext: "Prevents disuse atrophy", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "NMES / Faradic Stimulation", subtext: "Post-op & neuro muscle recovery", icon: "Zap" },
  ],
  "ultra-sound-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "15 to 25 Minutes", subtext: "1MHz / 3MHz acoustic soundwaves", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "5 to 8 Sessions", subtext: "Targeted soft tissue injury", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Scar & Tendon Healing", subtext: "Micro-massage & deep warmth", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Therapeutic Ultrasound", subtext: "Collagen elasticity enhancement", icon: "Zap" },
  ],
  "infra-radiation-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "15 to 20 Minutes", subtext: "Therapeutic infrared warmth", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "5 to 8 Sessions", subtext: "Pre-treatment muscle relaxing", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Vasodilation & Comfort", subtext: "Eases superficial tightness", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Infra-Red Radiation (IRR)", subtext: "Deep radiant dry heat", icon: "Zap" },
  ],
  "effective-traction-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "25 to 35 Minutes", subtext: "Cervical / lumbar distraction", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "8 to 12 Sessions", subtext: "Calibrated weight traction", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Nerve Root Decompression", subtext: "Intervertebral spacing gain", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Computerized Traction", subtext: "Graded tension & relaxation", icon: "ShieldCheck" },
  ],
  "best-pneumatic-compression-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "30 to 45 Minutes", subtext: "Sequential pneumatic sleeves", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 12 Sessions", subtext: "Lymphatic & post-workout", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Oedema Reduction & Drainage", subtext: "Enhanced venous return", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Intermittent Pneumatic Compression", subtext: "Multi-chamber gradient pressure", icon: "HeartPulse" },
  ],
  "paraffin-wax-bath-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "20 to 30 Minutes", subtext: "Warm therapeutic paraffin wax", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 10 Sessions", subtext: "Hands, wrists, feet & ankles", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Joint Stiffness Relief", subtext: "Deep, soothing moist heat", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Medical Paraffin Bath", subtext: "Arthritis & contracture recovery", icon: "HeartPulse" },
  ],
  "leading-osteopathy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Whole body biomechanical care", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "4 to 8 Sessions", subtext: "Structural alignment review", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Somatic Balance & Mobility", subtext: "Whole body tension release", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Osteopathic Manual Care", subtext: "Cranial, visceral & myofascial", icon: "ShieldCheck" },
  ],
  "top-dry-needling-therapy-services-in-ahmedabad": [
    { label: "SESSION DURATION", value: "25 to 35 Minutes", subtext: "Targeted myofascial trigger points", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "3 to 6 Sessions", subtext: "Fast muscular release", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Immediate Knot Release", subtext: "Restores muscle fiber length", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Certified Dry Needling", subtext: "Sterile filiform needle technique", icon: "Zap" },
  ],
  "manual-therapy-near-me-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Hands on joint & soft tissue", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "6 to 12 Sessions", subtext: "Integrated with exercise rehab", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Joint Glide & Pain Relief", subtext: "Maitland & Mulligan methods", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Evidence Based Manual Therapy", subtext: "Mobilisation with movement", icon: "ShieldCheck" },
  ],
  "expert-kinesio-tape-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "20 to 30 Minutes", subtext: "Application & functional check", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "3 to 5 Days Wear Time", subtext: "Re-applied per activity need", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Neuromuscular Feedback", subtext: "Swelling reduction & stability", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Certified Kinesio Taping", subtext: "Elastic therapeutic taping", icon: "Activity" },
  ],
  "top-instrumented-soft-tissue-mobilization-in-ahmedabad": [
    { label: "SESSION DURATION", value: "25 to 35 Minutes", subtext: "Stainless steel ergonomic tools", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "4 to 8 Sessions", subtext: "Fascial remodelling protocol", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Adhesion & Scar Breakdown", subtext: "Stimulates micro-circulation", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "IASTM Tool Therapy", subtext: "Myofascial cross friction release", icon: "ShieldCheck" },
  ],
  "best-cupping-therapy-in-ahmedabad": [
    { label: "SESSION DURATION", value: "25 to 35 Minutes", subtext: "Negative pressure suction cups", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "4 to 8 Sessions", subtext: "Integrated into rehab care", icon: "Calendar" },
    { label: "EXPECTED EFFECT", value: "Blood Flow & Decompression", subtext: "Releases fascial tightness", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Dynamic / Static Cupping", subtext: "Medical grade suction protocol", icon: "HeartPulse" },
  ],

  // ==========================================
  // MEDICAL FITNESS & CONDITIONING
  // ==========================================
  "top-fitness-centre-courses-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Physio designed workouts", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Monthly Membership", subtext: "3 to 5 sessions per week", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Stamina & Joint Health", subtext: "Doctor guided conditioning", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Medical Fitness Studio", subtext: "Injury prevention & strength", icon: "Dumbbell" },
  ],
  "best-aerobics-classes-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Cardio & rhythmic movement", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Group & Personal", subtext: "3 to 4 days weekly routine", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Cardio & Calorie Burn", subtext: "Heart health & agility", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Doctor Led Aerobics", subtext: "Joint safe impact guidance", icon: "Activity" },
  ],
  "step-aerobics-physiotherapy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 50 Minutes", subtext: "Platform step choreography", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Structured Classes", subtext: "3 sessions weekly", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Lower Body Power", subtext: "Calves, glutes & coordination", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Physio Step Aerobics", subtext: "Safe knee alignment focus", icon: "Dumbbell" },
  ],
  "hiit-training-workouts-in-ahmedabad": [
    { label: "SESSION DURATION", value: "35 to 45 Minutes", subtext: "hig intensity interval bursts", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Intensive Cycles", subtext: "3 times weekly", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Metabolic Conditioning", subtext: "Fast fat burn & VO2 max", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Supervised HIIT", subtext: "Injury free interval training", icon: "Activity" },
  ],
  "top-strength-training-studio-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Progressive resistance load", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Personalized Regimen", subtext: "3 to 4 days weekly", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Muscle & Bone Density", subtext: "Posture & spinal support", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Medical Strength Training", subtext: "Biomechanical supervision", icon: "Dumbbell" },
  ],
  "zumba-classes-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 55 Minutes", subtext: "hig energy dance fitness", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Fun Group Sessions", subtext: "3 to 5 days weekly", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Endurance & Weight Loss", subtext: "Full body calorie burn", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Physio Guided Zumba", subtext: "Safe joint impact control", icon: "Activity" },
  ],
  "pilates-studio-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 55 Minutes", subtext: "Core stabilization & posture", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Mat & Equipment", subtext: "2 to 3 sessions per week", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Deep Core & Flexibility", subtext: "Spinal alignment balance", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Clinical Pilates", subtext: "Rehab integrated Pilates", icon: "Dumbbell" },
  ],
  "best-power-yoga-classes-ahmedabad": [
    { label: "SESSION DURATION", value: "50 to 60 Minutes", subtext: "Dynamic vinyasa flow", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Structured Batches", subtext: "3 to 5 days weekly", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Flexibility & Core Power", subtext: "Mind body breathing control", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Therapeutic Power Yoga", subtext: "Safe anatomical alignment", icon: "Activity" },
  ],
  "ball-band-training-physiotherapy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "40 to 50 Minutes", subtext: "Swiss ball & resistance bands", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Progressive Workouts", subtext: "Clinic & home exercise plan", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Joint Stability & Control", subtext: "Core recruitment & balance", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Ball & Elastic Resistance", subtext: "Functional joint rehabilitation", icon: "Dumbbell" },
  ],
  "stretching-physiotherapy-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "35 to 45 Minutes", subtext: "Assisted PNF & static stretching", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Targeted Sessions", subtext: "2 to 3 times weekly", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Muscle Elasticity & ROM", subtext: "Relief from muscle tightness", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Therapeutic Assisted Stretch", subtext: "PNF & fascial elongation", icon: "Activity" },
  ],
  "female-fitness-trainer-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Dedicated female fitness session", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "1 on 1 & Small Group", subtext: "Tailored weekly schedule", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Postpartum, Tone & Bone", subtext: "Women's health & endurance", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Dr. Foram Patel & Team", subtext: "Certified female physiotherapists", icon: "HeartPulse" },
  ],
  "online-fitness-classes": [
    { label: "SESSION DURATION", value: "45 to 50 Minutes", subtext: "Live interactive HD video", icon: "Clock" },
    { label: "PROGRAM FORMAT", value: "Join from Home", subtext: "Flexible morning & evening", icon: "Calendar" },
    { label: "FITNESS GOAL", value: "Guided Home Conditioning", subtext: "Convenient regular workouts", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Live Supervised Online Physio", subtext: "Real-time posture feedback", icon: "Activity" },
  ],

  // ==========================================
  // CLINICAL PILLARS & HOME CARE
  // ==========================================
  "chiropractic-treatment-in-ahmedabad": [
    { label: "SESSION DURATION", value: "30 to 45 Minutes", subtext: "Spinal assessment & adjustments", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "4 to 8 Sessions", subtext: "Based on spinal misalignment", icon: "Calendar" },
    { label: "EXPECTED BENEFIT", value: "Joint Alignment & Relief", subtext: "Reduced nerve compression", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Certified Chiropractic Care", subtext: "Gentle spinal adjustments", icon: "ShieldCheck" },
  ],
  "physiotherapy-at-home-in-ahmedabad": [
    { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Full clinical care at your home", icon: "Clock" },
    { label: "TYPICAL COURSE", value: "Flexible Home Visits", subtext: "All Ahmedabad neighbourhoods", icon: "Calendar" },
    { label: "CARE ADVANTAGE", value: "Zero Commute Stress", subtext: "Ideal for elderly & post surgery", icon: "TrendingUp" },
    { label: "CARE APPROACH", value: "Licensed Home Physiotherapists", subtext: "Portable modalities & equipment", icon: "ShieldCheck" },
  ],
  "best-physiotherapy-clinic-in-ahmedabad": [
    { label: "NETWORK SIZE", value: "6 Modern Centres", subtext: "Thaltej, Gota, Bopal, Nikol & more", icon: "ShieldCheck" },
    { label: "CLINICAL TEAM", value: "40+ Licensed Physios", subtext: "Doctor led clinical team", icon: "HeartPulse" },
    { label: "EXPERIENCE", value: "16+ Years", subtext: "Clinical excellence across Gujarat", icon: "TrendingUp" },
    { label: "CARE STANDARDS", value: "Hospital Grade Technology", subtext: "US FDA approved equipment", icon: "Activity" },
  ],
  "best-physiotherapist-in-ahmedabad": [
    { label: "CLINICAL LEAD", value: "Dr. Hardik Patel (PT)", subtext: "Director & Senior Physio", icon: "ShieldCheck" },
    { label: "EXPERIENCE", value: "16+ Years", subtext: "Specialized in spine & joints", icon: "Clock" },
    { label: "CREDENTIALS", value: "FOMT (Australia)", subtext: "Certified Chiropractor", icon: "TrendingUp" },
    { label: "NETWORK REACH", value: "6 Gujarat Centres", subtext: "Comprehensive rehabilitation", icon: "Calendar" },
  ],
};

/**
 * Deterministically generates four patient-focused clinical information cards
 * for any given page. If exact facts exist for the slug, they are returned.
 * Otherwise, medically safe and relevant facts are intelligently derived
 * based on page group and clinical characteristics.
 */
export function getHeroClinicalFacts(
  page: { slug: string; group?: string; h1?: string; label?: string; lead?: string }
): [HeroFact, HeroFact, HeroFact, HeroFact] {
  const exact = specificFactsBySlug[page.slug];
  if (exact) {
    return exact;
  }

  // Fallback generation based on Page Group
  switch (page.group) {
    case "condition-ortho":
      return [
        { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Comprehensive assessment & care", icon: "Clock" },
        { label: "TYPICAL VISITS", value: "6 to 12 Sessions", subtext: "Based on joint & tissue stage", icon: "Calendar" },
        { label: "RECOVERY GOAL", value: "Gradual Pain & Range Relief", subtext: "Targeted functional milestones", icon: "TrendingUp" },
        { label: "CARE APPROACH", value: "Personalized Physiotherapy", subtext: "Doctor directed rehab protocol", icon: "ShieldCheck" },
      ];

    case "condition-neuro":
      return [
        { label: "SESSION DURATION", value: "50 to 70 Minutes", subtext: "One on one motor retraining", icon: "Clock" },
        { label: "TYPICAL COURSE", value: "Phased Neuro Program", subtext: "Progressive functional care", icon: "Calendar" },
        { label: "TREATMENT GOAL", value: "Functional Independence", subtext: "Balance & mobility progression", icon: "TrendingUp" },
        { label: "CARE APPROACH", value: "Neuromuscular Rehabilitation", subtext: "Neuro developmental therapy", icon: "ShieldCheck" },
      ];

    case "modality":
      return [
        { label: "SESSION DURATION", value: "25 to 40 Minutes", subtext: "Targeted therapeutic modality", icon: "Clock" },
        { label: "TYPICAL COURSE", value: "6 to 12 Sessions", subtext: "Cumulative cellular healing", icon: "Calendar" },
        { label: "EXPECTED BENEFIT", value: "Rapid Pain Modulation", subtext: "Tissue repair & comfort", icon: "TrendingUp" },
        { label: "CARE APPROACH", value: "Hospital Grade Technology", subtext: "Integrated with clinical rehab", icon: "Zap" },
      ];

    case "fitness":
      return [
        { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Doctor guided conditioning", icon: "Clock" },
        { label: "PROGRAM FORMAT", value: "Structured Weekly Plan", subtext: "Flexible morning & evening", icon: "Calendar" },
        { label: "FITNESS GOAL", value: "Core Strength & Stamina", subtext: "Safe injury free progression", icon: "TrendingUp" },
        { label: "CARE APPROACH", value: "Physio Supervised Training", subtext: "Safe anatomical alignment", icon: "Dumbbell" },
      ];

    default:
      return [
        { label: "SESSION DURATION", value: "45 to 60 Minutes", subtext: "Personalized clinical session", icon: "Clock" },
        { label: "TYPICAL VISITS", value: "Individualized Plan", subtext: "Based on clinical evaluation", icon: "Calendar" },
        { label: "RECOVERY TIMELINE", value: "Progressive Recovery", subtext: "Phased milestone progression", icon: "TrendingUp" },
        { label: "CARE APPROACH", value: "Complete Care Protocol", subtext: "Evidence based rehabilitation", icon: "ShieldCheck" },
      ];
  }
}
