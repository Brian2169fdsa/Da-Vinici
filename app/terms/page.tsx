import type { Metadata } from "next";
import { LegalPage, LegalContactLinks } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Da Vinci Consulting Services.",
};

const sections = [
  { h: "Use of our services", p: "Our website and the information on it are provided for general guidance about behavioral health consulting. Engagements for specific services are governed by separate written agreements between you and Da Vinci Consulting Services." },
  { h: "No professional or legal advice", p: "Content on this site is informational and does not constitute legal, clinical, or regulatory advice. Compliance requirements vary by state and situation; consult a qualified professional for your specific circumstances." },
  { h: "Intellectual property", p: "All content, branding, and materials on this site are the property of Da Vinci Consulting Services and may not be reproduced without permission." },
  { h: "Limitation of liability", p: "To the fullest extent permitted by law, Da Vinci Consulting Services is not liable for any indirect or consequential damages arising from your use of this website." },
  { h: "Links to other sites", p: "Our site may link to third-party websites. We are not responsible for the content or practices of those sites." },
  { h: "Changes to these terms", p: "We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms." },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These Terms of Service govern your use of davinciconsultingservices.com and the services described on it. By using our site, you agree to these terms. This is a starting template; have it reviewed by counsel before launch."
      sections={sections}
      contactHeading="Contact"
      contactBody={
        <>
          Questions about these terms? <LegalContactLinks />
        </>
      }
    />
  );
}
