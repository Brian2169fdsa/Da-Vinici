/**
 * The 8 service detail pages, keyed by URL slug. Content is verbatim from the
 * design handoff's ServiceDetail DATA object + the Services index copy.
 * Drives /services (index) and /services/[slug] (one template, 8 instances).
 */

export type Risk = { title: string; desc: string };
export type Step = { num: string; title: string; desc: string };

export type Service = {
  slug: string;
  crumb: string;
  /** Long page title used in <title> + service index. */
  title: string;
  h1: string;
  lead: string;
  cta: string;
  problemTitle: string;
  problem: string;
  risks: Risk[];
  steps: Step[];
  closing: string;
  tquote: string;
  tname: string;
  /** Service-index card fields. */
  indexNum: string;
  indexBlurb: string;
  indexCta: string;
};

export const SERVICES: Record<string, Service> = {
  "medicaid-credentialing": {
    slug: "medicaid-credentialing",
    crumb: "Medicaid Credentialing",
    title: "Medicaid Credentialing & Application",
    h1: "Medicaid credentialing, handled with precision.",
    lead: "Streamline the credentialing process with expert-driven support. We ensure your application is accurate, compliant, and processed efficiently, so you can focus on exceptional patient care without unnecessary delays.",
    cta: "Start Your Credentialing Process",
    problemTitle: "Complex applications, costly delays.",
    problem:
      "Navigating Medicaid credentialing can be overwhelming and time-consuming. Complex application requirements, frequent updates to state regulations, and administrative errors often lead to delays or denials, preventing providers from enrolling and serving patients effectively.",
    risks: [
      { title: "Loss of Revenue", desc: "Delayed credentialing means missed billing opportunities for Medicaid-covered services." },
      { title: "Patient Access Issues", desc: "Without Medicaid credentials, providers may lose patients who depend on it for care." },
      { title: "Compliance Challenges", desc: "Errors or missed deadlines can lead to compliance issues or outright rejection." },
      { title: "Administrative Overload", desc: "Staff struggle to manage application complexity alongside other priorities." },
    ],
    steps: [
      { num: "01", title: "Expert Guidance", desc: "Navigate the complex process with skilled professionals handling every step with care and precision." },
      { num: "02", title: "Accuracy & Compliance", desc: "All documentation complete, accurate, and compliant with state-specific regulations to accelerate processing." },
      { num: "03", title: "Streamlined Process", desc: "We manage timelines and reduce the administrative burden so your team can focus on quality care." },
      { num: "04", title: "Personalized Support", desc: "A tailored approach to your organization's goals, challenges, and successful enrollment." },
    ],
    closing:
      "Let Da Vinci handle the complexities of Medicaid credentialing, so you can focus on what matters most, providing exceptional care. Your credentials are in expert hands.",
    tquote:
      "Working with Tony at DaVinci offers any business the opportunity to fast-track start-up duties, Joint Commission and licensing prep, policies and procedures, and assistance with credentialing applications to avoid delays. Tony is always available to assist programs large and small. I recommend a consultation that takes the guesswork out of the process.",
    tname: "Kristin Glavin",
    indexNum: "06",
    indexBlurb:
      "We handle provider ID setup and facility certification, navigating state and federal systems to prevent delays and maximize service delivery.",
    indexCta: "Start credentialing",
  },
  "joint-commission-prep": {
    slug: "joint-commission-prep",
    crumb: "Joint Commission Prep",
    title: "Joint Commission Survey Assistance",
    h1: "Accreditation, without the surprises.",
    lead: "Achieve accreditation with confidence. Our expert guidance ensures your organization meets the highest standards of care, compliance, and operational efficiency, at every stage of the survey cycle.",
    cta: "Prep for Accreditation Now",
    problemTitle: "Rigorous standards, limited resources.",
    problem:
      "Navigating the Joint Commission accreditation process can be daunting. With ever-changing regulations, rigorous standards, and limited resources, many facilities feel overwhelmed preparing for surveys. A lack of preparation can lead to missed accreditation, compliance penalties, and lost credibility.",
    risks: [
      { title: "Lost Accreditation", desc: "Prevents access to contracts and reimbursement from key payors." },
      { title: "Regulatory Fines", desc: "Failing to meet compliance standards can lead to costly penalties." },
      { title: "Operational Disruptions", desc: "Unresolved deficiencies can halt workflows and patient care." },
      { title: "Reputational Damage", desc: "Lack of accreditation diminishes public trust in your facility." },
    ],
    steps: [
      { num: "01", title: "Mock Surveys & Gap Assessments", desc: "We simulate the Joint Commission process, identify compliance gaps, and provide actionable recommendations." },
      { num: "02", title: "Survey Preparation Training", desc: "Equip your staff with the knowledge and confidence to navigate accreditation, through tailored workshops." },
      { num: "03", title: "Documentation Review", desc: "Ensure all records are complete, organized, and clearly demonstrate compliance." },
      { num: "04", title: "Plan of Correction Support", desc: "Create and implement effective plans of correction to address any identified deficiencies." },
      { num: "05", title: "Ongoing Compliance Monitoring", desc: "Systems to maintain continuous readiness for triennial surveys and long-term accreditation." },
    ],
    closing:
      "We simplify the Joint Commission process with tailored support and expert guidance, so your facility meets every requirement and accreditation arrives without surprises.",
    tquote:
      "Working with Tony at DaVinci offers any business the opportunity to fast-track start-up duties, preparation for Joint Commission and licensing surveys, policies and procedures, and credentialing assistance. Tony is always available to assist both small and large healthcare programs. I recommend a consultation that can result in faster start-up and faster ROI.",
    tname: "Kristin Glavin",
    indexNum: "04",
    indexBlurb:
      "We guide you through every stage, from initial surveys to triennial assessments, so your facility meets standards, avoids citations, and earns accreditation.",
    indexCta: "Get accreditation help",
  },
  "compliance-training": {
    slug: "compliance-training",
    crumb: "Compliance Training",
    title: "Healthcare Quality Compliance Training",
    h1: "Compliance training that protects your accreditation.",
    lead: "Customized programs and real-world mock survey simulations help your behavioral health team meet regulatory standards, deliver high-quality care, and maintain operational excellence.",
    cta: "Customize Your Training Plan",
    problemTitle: "An ever-changing regulatory landscape.",
    problem:
      "Behavioral healthcare organizations face constant regulatory change. With limited time and growing demands, staying ahead of compliance updates is a challenge, especially when it impacts clinical outcomes and audit readiness. Without structured training, your team may face failed audits, penalties, and inefficiencies.",
    risks: [
      { title: "Failed Accreditation Audits", desc: "Compliance gaps can result in Joint Commission penalties or loss of accreditation." },
      { title: "Operational Inefficiencies", desc: "Inadequate processes slow systems, reduce productivity, and increase costs." },
      { title: "Reputational Damage", desc: "Failed audits or poor scores harm patient trust and stakeholder confidence." },
      { title: "Staff Burnout", desc: "Without clear systems, compliance tasks overwhelm your team and hurt morale." },
    ],
    steps: [
      { num: "01", title: "Mock Survey Simulations", desc: "Joint Commission-style assessments help staff identify and correct weaknesses before real audits." },
      { num: "02", title: "Custom Training Programs", desc: "Tailored to your workflows, facility type, and regulatory needs for measurable improvement." },
      { num: "03", title: "Ongoing Support", desc: "We keep you informed on rule changes with updated guidance so your team never falls behind." },
      { num: "04", title: "Framework Design", desc: "Streamlined frameworks that clarify compliance roles and align operations with regulators." },
      { num: "05", title: "Hands-On Strategy", desc: "One-on-one support and actionable feedback, from front-line staff to leadership teams." },
    ],
    closing:
      "Empower your organization with practical compliance training that supports patient care and operational excellence.",
    tquote:
      "Tony at Da Vinci Consulting was fantastic to work with, professional, attentive, and he really understood my needs. He offered insightful advice and solutions that made a big difference in my project. I highly recommend working with him.",
    tname: "Adam Parker",
    indexNum: "02",
    indexBlurb:
      "Mock surveys simulate Joint Commission assessments, helping your organization stay audit-ready. We identify weak points and prepare your staff.",
    indexCta: "Prepare your team",
  },
  "state-licensing": {
    slug: "state-licensing",
    crumb: "State Licensing",
    title: "State Department of Health Licensing",
    h1: "Get licensed faster, with expert support.",
    lead: "We handle the entire process, from paperwork to inspections, so your behavioral health facility can launch or expand with confidence.",
    cta: "Simplify Your Licensing Steps",
    problemTitle: "Why licensing becomes a roadblock.",
    problem:
      "Navigating state licensing can stall your entire operation. Shifting regulations, vague documentation standards, and unclear timelines often lead to costly delays, denials, or rework. Without experienced guidance, even prepared organizations can get stuck in the system.",
    risks: [
      { title: "Operational Delays", desc: "Missed launch dates or expansion freezes disrupt care delivery and strain teams." },
      { title: "Regulatory Violations", desc: "Small paperwork errors can trigger investigations, rejections, or fines." },
      { title: "Financial Losses", desc: "Licensing bottlenecks stall billing, costing thousands in missed revenue." },
      { title: "Reputation Damage", desc: "Delays and denials undermine credibility with payers, partners, and patients." },
    ],
    steps: [
      { num: "01", title: "Complete Licensing Navigation", desc: "We manage state-specific submissions, requirements, and approval timelines so nothing gets missed." },
      { num: "02", title: "Policy & Procedure Compliance", desc: "Align internal policies with state health department standards to eliminate gaps." },
      { num: "03", title: "Inspection-Ready Preparation", desc: "Walkthroughs, virtual or on-site, identify issues and prepare your team for inspections." },
      { num: "04", title: "Compliance Monitoring", desc: "We track evolving state regulations to keep you up to date and audit-ready." },
      { num: "05", title: "Renewals & Ongoing Support", desc: "We assist with license renewals and provide long-term compliance support as you grow." },
    ],
    closing:
      "With Da Vinci, you'll avoid delays, denials, and last-minute scrambling, a seamless, proactive path to state licensing so you can focus on delivering care.",
    tquote:
      "Tony has been a leader and innovator in the mental and behavioral health sector for many years. I trust his skills when it comes to ethics, responsibilities, and procedures. Whether it is licensing or accreditations, I can safely and confidently refer providers to DaVinci.",
    tname: "Alan Weaver",
    indexNum: "08",
    indexBlurb:
      "We manage your Department of Health submissions, inspections, and documentation. From application to approval, compliance every step of the way.",
    indexCta: "Start licensing support",
  },
  "integrity-audit": {
    slug: "integrity-audit",
    crumb: "Company Integrity Audit",
    title: "Company Integrity Audit",
    h1: "Compliance audits that protect revenue and reduce risk.",
    lead: "Uncover operational blind spots, strengthen compliance, and prevent costly errors with Company Integrity Audits designed specifically for behavioral healthcare organizations.",
    cta: "Schedule Your Audit",
    problemTitle: "Vulnerabilities stack up fast.",
    problem:
      "Most behavioral health teams are stretched thin. Billing issues, incomplete documentation, or outdated compliance practices often go unnoticed, until they cost you. Without a structured internal review, vulnerabilities stack up fast, leading to denied claims, missed revenue, and regulatory penalties.",
    risks: [
      { title: "Compliance Violations", desc: "Regulatory fines or loss of accreditation status." },
      { title: "Revenue Losses", desc: "Denied claims and reduced reimbursements." },
      { title: "Operational Inefficiencies", desc: "Wasted time and misaligned workflows." },
      { title: "Reputational Damage", desc: "Damaged credibility with stakeholders and payers." },
    ],
    steps: [
      { num: "01", title: "Billing Code Review", desc: "We ensure accuracy, compliance with payer guidelines, and maximized reimbursements." },
      { num: "02", title: "Clinical Documentation Analysis", desc: "Our experts review clinical notes for accuracy, completeness, and regulatory alignment." },
      { num: "03", title: "Compliance Optimization", desc: "We assess against health department rules, accreditation standards, and payor contracts, with a clear action plan." },
      { num: "04", title: "Fresh Perspective", desc: "Decades of behavioral health experience uncover inefficiencies internal teams overlook." },
      { num: "05", title: "Tailored Action Plan", desc: "Prioritized recommendations to streamline operations and protect your revenue." },
    ],
    closing: "We identify and resolve your most critical compliance gaps, before they escalate.",
    tquote:
      "Da Vinci Consulting Services exceeded my expectations in every way. Their team brought a wealth of knowledge and experience, helping us navigate complex challenges with ease. They understood our unique needs and provided actionable solutions that made a real difference. Top-notch support and professionalism.",
    tname: "Michael Cunningham",
    indexNum: "01",
    indexBlurb:
      "We examine billing codes, clinical documentation, payor contracts, and regulatory compliance, optimizing revenue and aligning your facility with industry standards.",
    indexCta: "Review your audit blueprint",
  },
  "risk-management": {
    slug: "risk-management",
    crumb: "Risk Management",
    title: "Risk Management Solutions",
    h1: "Risk management that safeguards your operations.",
    lead: "Stay ahead of challenges with tailored risk management solutions. From compliance training to operational assessments, we equip your team to navigate risk and maintain excellence.",
    cta: "Explore Risk Training",
    problemTitle: "Proactive measures, or costly exposure.",
    problem:
      "Behavioral healthcare organizations face continuous regulatory change, operational vulnerabilities, and patient safety risks. Without proactive measures, these issues can lead to financial losses, legal exposure, and reputational harm.",
    risks: [
      { title: "Regulatory Fines & Penalties", desc: "Non-compliance can result in hefty fines and even facility shutdowns." },
      { title: "Patient Harm", desc: "Poor risk management leads to adverse outcomes and legal liability." },
      { title: "Financial Loss", desc: "Misaligned practices waste resources and pull focus from delivering care." },
      { title: "Reputational Damage", desc: "Regulatory scrutiny undermines credibility with patients and stakeholders." },
    ],
    steps: [
      { num: "01", title: "Risk Assessment & Audit", desc: "Identify gaps in compliance, safety protocols, and workflows through structured evaluations." },
      { num: "02", title: "Policy & Process Development", desc: "Build or refine risk-mitigation frameworks to meet standards and minimize liability." },
      { num: "03", title: "Staff Training & Readiness", desc: "Empower your team to recognize, respond to, and prevent risk scenarios." },
      { num: "04", title: "Operational Workflow Review", desc: "Streamline operations and eliminate inefficiencies that increase exposure." },
      { num: "05", title: "Ongoing Risk Monitoring", desc: "Updated tools, compliance alerts, and strategy sessions for long-term success." },
    ],
    closing:
      "Our expertise turns risk into readiness, keeping your organization compliant, efficient, and ready for anything.",
    tquote:
      "Da Vinci Consulting Services exceeded my expectations in every way. Their team brought a wealth of knowledge and experience, helping us navigate complex challenges with ease. The level of support and professionalism was truly top-notch. I highly recommend them.",
    tname: "Michael Cunningham",
    indexNum: "03",
    indexBlurb:
      "Targeted training on the latest behavioral health regulations. Your staff will identify risk, reduce liability, and maintain compliance in a changing environment.",
    indexCta: "Explore risk training",
  },
  "policies-procedures": {
    slug: "policies-procedures",
    crumb: "Policies & Procedures",
    title: "Policies & Procedures Support",
    h1: "Custom policies for compliance and operational excellence.",
    lead: "Create a strong foundation with tailored policies and procedures that align with Joint Commission standards and support regulatory compliance.",
    cta: "Customize Your Policies",
    problemTitle: "Inconsistent or outdated policies.",
    problem:
      "Behavioral healthcare organizations often struggle with policies that don't align with current regulations or operational needs. These inconsistencies lead to inefficiencies, compliance risks, and potential penalties, and many lack the expertise to create or update them effectively.",
    risks: [
      { title: "Compliance Penalties", desc: "Failing to meet standards can result in fines, audits, and accreditation delays." },
      { title: "Operational Inefficiencies", desc: "Outdated or unclear policies slow workflows and confuse staff." },
      { title: "Reputation Damage", desc: "Compliance issues or operational failures harm credibility and patient trust." },
      { title: "Employee Burnout", desc: "Unclear procedures overwhelm teams and erode morale over time." },
    ],
    steps: [
      { num: "01", title: "Policy Development", desc: "Tailored policies for any level of care, aligned with Joint Commission and regulatory guidelines." },
      { num: "02", title: "Policy Updates & Audits", desc: "Review existing policies for gaps and outdated practices; update to maintain compliance and clarity." },
      { num: "03", title: "Staff Training on New Policies", desc: "Workshops and guides so your staff understands and follows updated procedures." },
      { num: "04", title: "Implementation Support", desc: "Roll out new policies seamlessly and monitor adoption across your organization." },
      { num: "05", title: "Operational Optimization", desc: "Align policies with workflows to reduce redundancy and streamline processes." },
    ],
    closing:
      "We create a framework of policies and procedures that ensures compliance, streamlines operations, and empowers your team.",
    tquote:
      "Tony at Da Vinci Consulting was fantastic to work with, professional, attentive, and he really understood my needs. He offered insightful advice and solutions that made a big difference. I highly recommend working with him.",
    tname: "Adam Parker",
    indexNum: "05",
    indexBlurb:
      "Whether launching or refining a program, we build Joint Commission–aligned policies that reflect your operations and improve efficiency.",
    indexCta: "Customize your policies",
  },
  "leadership-development": {
    slug: "leadership-development",
    crumb: "Leadership Development",
    title: "Leadership Development",
    h1: "Build leaders who last.",
    lead: "Empower your team with the tools and strategies to lead with confidence and purpose. We create tailored programs that inspire innovation, foster collaboration, and drive organizational success.",
    cta: "Build Leadership Skills",
    problemTitle: "Strong organizations need strong leaders.",
    problem:
      "Effective leadership is critical, yet many teams lack the training or resources to cultivate strong leaders. Without robust leadership, organizations struggle with operational inefficiencies, staff disengagement, and limited growth opportunities.",
    risks: [
      { title: "Operational Inefficiency", desc: "Poor leadership leads to disorganized workflows and missed improvements." },
      { title: "Staff Turnover", desc: "Lack of direction and mentorship drives dissatisfaction and high turnover." },
      { title: "Limited Growth", desc: "Without effective leaders, organizations struggle to adapt or scale." },
      { title: "Compliance Challenges", desc: "Ineffective leaders may fail to prioritize regulatory requirements." },
    ],
    steps: [
      { num: "01", title: "Customized Leadership Training", desc: "Programs tailored to your organization, building communication, decision-making, and team management." },
      { num: "02", title: "Mentorship Programs", desc: "Pair experienced leaders with emerging talent to foster knowledge-sharing and growth." },
      { num: "03", title: "Team Collaboration Workshops", desc: "Interactive sessions that strengthen collaboration and problem-solving across teams." },
      { num: "04", title: "Operational & Compliance Focus", desc: "Incorporate operational and compliance priorities into well-rounded leadership development." },
      { num: "05", title: "Ongoing Support & Evaluation", desc: "Continued guidance, progress monitoring, and actionable feedback for continuous improvement." },
    ],
    closing: "Build a team of confident, capable leaders prepared to guide your organization to new heights.",
    tquote:
      "Awesome experience with Tony. Very knowledgeable, affordable rates, prompt responses whenever we have a question. Offers in-person and video meetings. Anyone needing assistance with AHCCCS, managed care, or becoming Joint Commission accredited will receive the utmost professionalism.",
    tname: "ET",
    indexNum: "07",
    indexBlurb:
      "We equip behavioral health leaders with the tools to manage teams, make strategic decisions, and guide growth, collaboration, communication, sustainability.",
    indexCta: "Build leadership skills",
  },
};

/** Ordered slugs for the /services index grid (numbered 01–08). */
export const SERVICE_INDEX_ORDER = [
  "integrity-audit",
  "compliance-training",
  "risk-management",
  "joint-commission-prep",
  "policies-procedures",
  "medicaid-credentialing",
  "leadership-development",
  "state-licensing",
] as const;

export const SERVICE_SLUGS = Object.keys(SERVICES);

export const getService = (slug: string): Service | undefined => SERVICES[slug];

/** "Why Choose Da Vinci" differentiators — used on Services + About. */
export const DIFFERENTIATORS = [
  { title: "Trusted Expertise", desc: "13+ years leading in Medicaid credentialing, Joint Commission prep, risk mitigation, and operational systems design." },
  { title: "Tailored Support", desc: "Custom strategies, from state licensing to leadership coaching, designed for your structure, size, and state requirements." },
  { title: "Measurable Results", desc: "We help facilities achieve accreditation, streamline operations, and boost performance with repeatable, data-informed strategies." },
  { title: "Partnership Over Consulting", desc: "We don't just advise, we embed with your team to build compliant, efficient, mission-aligned systems that last." },
] as const;
