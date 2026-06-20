/**
 * Site-wide constants: NAP (name/address/phone), navigation, the services
 * menu, trust partners, and home FAQ copy. Single source of truth so the
 * header, footer, and pages stay in sync.
 */

export const SITE = {
  name: "Da Vinci Consulting Services",
  shortName: "Da Vinci",
  foundedYear: 2016,
  phone: "480-606-8602",
  phoneHref: "tel:4806068602",
  email: "tony@davinciconsultingservices.com",
  emailHref: "mailto:tony@davinciconsultingservices.com",
  address: {
    street: "1141 East Glendale Avenue #1054",
    city: "Phoenix",
    region: "Arizona",
    regionShort: "AZ",
    postal: "85020",
  },
  url: "https://www.davinciconsultingservices.com",
  builtBy: { label: "Phoenix Creative Works", href: "https://phoenixcreativeworks.com/" },
} as const;

export const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasMega: true },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

/** Short menu labels for the Services mega-menu + footer. */
export const SERVICES_MENU = [
  { name: "Medicaid Credentialing", desc: "Secure provider status, fast", slug: "medicaid-credentialing" },
  { name: "Joint Commission Prep", desc: "Accreditation, without surprises", slug: "joint-commission-prep" },
  { name: "Compliance Training", desc: "Audit-ready teams", slug: "compliance-training" },
  { name: "State Licensing", desc: "Launch and expand, faster", slug: "state-licensing" },
  { name: "Company Integrity Audit", desc: "Find gaps before they cost you", slug: "integrity-audit" },
  { name: "Risk Management", desc: "Turn risk into readiness", slug: "risk-management" },
  { name: "Policies & Procedures", desc: "Joint Commission–aligned docs", slug: "policies-procedures" },
  { name: "Leadership Development", desc: "Build leaders who last", slug: "leadership-development" },
] as const;

export const PARTNERS = [
  "Medicaid",
  "The Joint Commission",
  "AHCCCS",
  "AZ Dept. of Health",
  "ABCAC",
] as const;

export const BLOG_CATEGORIES = [
  "Regulatory Excellence",
  "Professional Collaboration",
  "Seamless Operations",
  "Innovation in Leadership",
] as const;

export const HOME_FAQS = [
  {
    q: "What services does Da Vinci Consulting Services offer?",
    a: "End-to-end behavioral health consulting: Medicaid credentialing, Joint Commission survey preparation, compliance and quality training, state Department of Health licensing, company integrity audits, risk management, policies and procedures, and leadership development.",
  },
  {
    q: "How do you help my organization prepare for Joint Commission accreditation?",
    a: "We run mock surveys and gap assessments, train your staff on the standards, review documentation, build your plan of correction, and stay with you through the survey and triennial cycle, so accreditation arrives without surprises.",
  },
  {
    q: "Do you work with organizations outside of Arizona?",
    a: "Yes. We're Phoenix-based and deeply versed in Arizona requirements, and we support behavioral health organizations across the country, every strategy is tailored to your state's standards.",
  },
  {
    q: "How do you improve the efficiency of my facility?",
    a: "We audit your billing, documentation, and workflows, align policies with regulatory standards, and streamline operations, removing redundancy so your team spends less time on paperwork and more on care.",
  },
] as const;

/** Options for the home lead form's "What do you need help with?" field. */
export const LEAD_NEEDS = [
  "Medicaid Credentialing",
  "Joint Commission Preparation",
  "Compliance Training",
  "State Licensing",
  "Risk Management",
  "Policies & Procedures",
  "Leadership Development",
  "Operational Consulting",
  "Not sure yet",
] as const;

/** Options for the Contact page's "Type of service requested" dropdown (11). */
export const CONTACT_SERVICE_TYPES = [
  "Medicaid Credentialing",
  "Joint Commission Preparation",
  "Healthcare Compliance Training",
  "Risk Management Solutions",
  "Policies and Procedures Development",
  "State Licensure Support",
  "Leadership Development",
  "Operational Consulting",
  "Accreditation Support",
  "Strategic Growth Planning",
  "Behavioral Health Consulting",
] as const;
