import type { PageContent } from "@/data/types";

export const content: PageContent = {
  slug: "stroke-in-treatment-ahmedabad",
  h1: "Physiotherapy Treatment for Stroke in Ahmedabad",
  lead: "Stroke occurs when the blood supply to a part of brain is interrupted or reduced preventing brain tissue from getting oxygen and nutrients.Brain cells begin to die in minutes.Thus stroke is medical emergency and treatment is crucial.Early action can reduce brain damage and complications.The 2 main causes are blocked artery or leaking of blood vessel.Some people have only temporary disruption of blood flow to brain know as transient ischemic attack, that doesn’t cause lasting symptoms.",
  hero: "/assets/conditions/Stroke.webp",
  blocks: [
    {
      t: "p",
      text: "A cerebrovascular accident (Stroke) results from an acute interruption of cerebral blood flow (Ischemic Stroke) or vascular rupture (Hemorrhagic Stroke), causing damage to cortical motor and sensory regions. This frequently results in unilateral paralysis (**hemiplegia**), abnormal muscle synergy patterns, spasticity, balance impairment, and speech/swallowing difficulties. However, the human brain possesses remarkable **neuroplasticity**, the capacity of undamaged neural pathways to reorganize and relearn lost motor functions. At **Complete Care Neuro-Physiotherapy**, we provide intensive, evidence based motor relearning programs, task-specific training, and robotic-assisted gait re-education across Gujarat.",
    },
    {
      t: "snapshot",
      title: "Clinical Snapshot: Stroke Rehabilitation & Neuroplasticity",
      items: [
        {
          label: "Common Types",
          value: "Ischemic Stroke (Thromboembolic ~85%), Hemorrhagic Stroke (Intracerebral/Subarachnoid ~15%), TIA",
        },
        {
          label: "Hallmark Deficits",
          value: "Contralateral Hemiparesis/Hemiplegia, Spasticity, Synergy Patterns, Hemispatial Neglect, Ataxia",
        },
        {
          label: "Critical Window",
          value: "Maximal spontaneous neuroplastic recovery occurs in the first 3 to 6 months; ongoing gains possible for years",
        },
        {
          label: "Primary Goals",
          value: "Break abnormal flexor/extensor synergies, restore independent walking, regain hand dexterity, prevent shoulder subluxation",
        },
      ],
    },
    {
      t: "h2",
      text: "Core Stages of post stroke Motor Recovery",
    },
    {
      t: "p",
      text: "We utilize Brunnstrom’s Six Stages of Motor Recovery to track and guide each patient's neuromuscular progression from flaccidity to voluntary isolated movement:",
    },
    {
      t: "grid",
      columns: 2,
      items: [
        {
          title: "Stage 1 & 2: Flaccidity to Basic Synergy",
          desc: "Initial complete lack of muscle tone progressing to the emergence of involuntary mass synergy patterns and minimal spasticity during coughing or yawning.",
          badge: "Early Phase",
        },
        {
          title: "Stage 3: Severe Spasticity & Voluntary Synergies",
          desc: "Spasticity peaks; the patient can initiate mass flexion or extension movements as a unified group but lacks individual joint control.",
          badge: "Synergy Dominant",
        },
        {
          title: "Stage 4 & 5: Spasticity Declines & Isolated Control",
          desc: "Spasticity begins to reduce; the patient masters movements that deviate from basic synergies (e.g., placing hand behind back, knee flexion while sitting).",
          badge: "Relearning",
        },
        {
          title: "Stage 6: Individual Joint Coordination & Normal Speed",
          desc: "Spasticity is largely absent, allowing near-normal movement velocity, fine manual dexterity, and complex reciprocal gait mechanics.",
          badge: "Functional Master",
        },
      ],
    },
    {
      t: "h2",
      text: "Common Functional Deficits Managed",
    },
    {
      t: "grid",
      columns: 2,
      items: [
        {
          title: "Hemiplegic Shoulder Subluxation & Pain",
          desc: "Dropping of the humeral head out of the glenoid fossa due to supraspinatus and deltoid paralysis, requiring supportive taping and electrical stimulation.",
        },
        {
          title: "Spastic Foot Drop & Circumductive Gait",
          desc: "Overactivity of the gastrocnemius/soleus causing the toes to point down and inward (equinovarus), requiring AFO bracing and tibial anterior retraining.",
        },
        {
          title: "Loss of Trunk & Pelvic Stability",
          desc: "Inability to bear equal weight on the hemiplegic side, causing asymmetric weight shifting, fear of falling, and poor sitting posture.",
        },
        {
          title: "Upper Extremity Hand & Finger Clumsiness",
          desc: "Inability to release objects (finger flexor hypertonia) and loss of fine pincer grasp required for eating and buttoning clothes.",
        },
      ],
    },
    {
      t: "h2",
      text: "Comprehensive Neurological Assessment at Complete Care",
    },
    {
      t: "ul",
      items: [
        "**Fugl-Meyer Motor Assessment (FMA)**: Standardized quantitative scoring of upper and lower extremity motor impairment and joint synergy control.",
        "**Berg Balance Scale (BBS) & Dynamic Gait Index (DGI)**: Objective evaluation of static sitting/standing balance and dynamic walking stability.",
        "**Modified Ashworth Scale (MAS)**: Assessing spasticity grades in the biceps, wrist flexors, quadriceps, and ankle plantarflexors.",
        "**Gait Kinematic & Asymmetry Analysis**: Measuring step length, stance time symmetry, and hip circumduction patterns.",
      ],
    },
    {
      t: "h2",
      text: "Our Multimodal Stroke Neuro-Rehabilitation Pathway",
    },
    {
      t: "steps",
      subtitle: "An evidence based protocol leveraging neuroplasticity to restore functional movement:",
      steps: [
        {
          step: "01",
          title: "Phase 1: Bed Positioning & Neuro-Facilitation (Acute Stage)",
          desc: "Proper anti-spasticity limb positioning, Bobath/NDT neuro-facilitation techniques, and [Russian / Functional Stimulation](/russian-stimulation-treatment-in-ahmedabad) to prevent learned non-use.",
        },
        {
          step: "02",
          title: "Phase 2: Trunk Control & Sit-to-Stand Mastery",
          desc: "Dynamic weight-shifting exercises on Swiss balls, pelvic bridging, and symmetrical sit-to-stand transitions to activate core stabilizers.",
        },
        {
          step: "03",
          title: "Phase 3: Constraint-Induced Movement Therapy (CIMT) & Mirror Therapy",
          desc: "Forcing functional use of the hemiplegic hand through repetitive task-oriented training, mirror visual feedback, and fine motor grasping tasks.",
        },
        {
          step: "04",
          title: "Phase 4: Body-Weight Supported Gait & Community Walking",
          desc: "Parallel bar walking, treadmill training with harness support, obstacle negotiation, stair climbing, and dual-task cognitive walking drills.",
        },
      ],
    },
    {
      t: "pricing",
      title: "Estimated Stroke Rehabilitation & Therapy Pricing",
      range: "₹500 to ₹2,000",
      consultationFee: "₹500 (Stroke Recovery & Motor Screening)",
      treatmentRange: "₹500 to ₹2,000 / session",
      lowPrice: 500,
      highPrice: 2000,
      currency: "INR",
      context: "Stroke recovery therapy rates range between ₹500 and ₹2,000 depending on whether intensive sessions are delivered in our specialized neuro-rehab centre (with body-weight support & PNF) or as doorstep home physiotherapy visits.",
      inclusions: [
        "Neuro-developmental (Bobath/NDT) therapy",
        "Spasticity reduction & gait training",
        "Upper extremity motor retraining",
        "Home visit options across Ahmedabad"
],
    },
    {
      t: "callout",
      variant: "warning",
      title: "BE-FAST: Recognizing Acute Stroke Symptoms",
      text: "If someone displays sudden Balance loss, Eyesight changes, Facial drooping, Arm weakness, or Slurred speech, it is TIME to call emergency medical services immediately. Immediate thrombolysis or thrombectomy within the first 4.5 hours saves millions of brain cells.",
    },
    {
      t: "doctor",
      name: "Dr. Hardik Patel (PT)",
      role: "Director & Lead Neuro-Rehabilitation Specialist | Complete Care",
      bio: "With over 16+ years of clinical experience in stroke neuro-rehabilitation, Dr. Hardik Patel leads specialized multidisciplinary motor relearning, gait retraining, and home recovery programs across Gujarat.",
      to: "/best-physiotherapist-in-ahmedabad",
      image: "/assets/treatments/Complete-Care-Doctor-Image-cc.webp",
      ctaText: "Consult Stroke Specialist",
    },
    {
      t: "faq",
      faqs: [
        {
          q: "How soon should stroke physiotherapy begin?",
          a: "Rehabilitation should begin as soon as the patient is medically stabilized (often within 24 to 48 hours in the hospital). Early mobilization prevents contractures, pneumonia, and deep vein thrombosis while maximizing early neuroplastic recovery.",
        },
        {
          q: "Can a stroke patient recover after 1 year?",
          a: "Yes. While the fastest recovery occurs in the first 6 months, research shows that neuroplasticity continues throughout life. With intensive task-specific physiotherapy, patients can make meaningful functional gains years after a stroke.",
        },
        {
          q: "How does physiotherapy treat spasticity after stroke?",
          a: "We combine sustained prolonged stretching, weight bearing exercises, functional electrical stimulation (FES), cryotherapy, and coordinated medication timing with your neurologist to relax hyperactive reflex loops.",
        },
        {
          q: "Do you offer doorstep home neuro-physiotherapy for stroke patients in Ahmedabad?",
          a: "Yes. Complete Care offers specialized [doorstep home visit neuro-physiotherapy](/home-visit) across Ahmedabad, equipped with electrical stimulators, positioning supports, and gait aids.",
        },
      ],
    },
  ],
  quickLinks: [
    { label: "Spinal Cord Injury", to: "/spinal-cord-specialist-in-ahmedabad" },
    { label: "Parkinson's Disease", to: "/parkinson-disease-treatment-in-ahmedabad" },
    { label: "Russian Stimulation", to: "/russian-stimulation-treatment-in-ahmedabad" },
    { label: "Home Visit Physiotherapy", to: "/home-visit" },
  ],
};
