import type { Metadata } from "next";
import { LegalPage, LegalContactLinks } from "@/components/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Da Vinci Consulting Services.",
};

const sections = [
  { h: "Information we collect", p: "When you submit a contact or consultation form, subscribe to our newsletter, or email us, we collect the information you provide, such as your name, facility name, email address, phone number, and message. We also collect basic, non-identifying analytics about how visitors use our site." },
  { h: "How we use your information", p: "We use your information to respond to inquiries, provide consulting services, send updates you have requested, and improve our website. We do not sell your personal information." },
  { h: "How we share information", p: "We share information only with service providers who help us operate our business (for example, email and form-handling services), and only as needed to deliver our services. We may disclose information if required by law." },
  { h: "Data retention", p: "We retain the information you provide for as long as needed to serve you and to meet our legal and professional obligations, then dispose of it securely." },
  { h: "Your choices", p: "You may unsubscribe from our newsletter at any time using the link in each email, and you may request that we update or delete your information by contacting us." },
  { h: "Cookies and analytics", p: "Our site may use cookies and similar technologies to remember preferences and measure traffic. You can control cookies through your browser settings." },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`Da Vinci Consulting Services ("we," "us," or "our") respects your privacy. This policy explains what information we collect when you use davinciconsultingservices.com or contact us, how we use it, and the choices you have. This is a starting template; have it reviewed by counsel before launch.`}
      sections={sections}
      contactHeading="Contact us"
      contactBody={
        <>
          Questions about this policy? <LegalContactLinks /> Mail: {SITE.address.street},{" "}
          {SITE.address.city}, {SITE.address.region} {SITE.address.postal}.
        </>
      }
    />
  );
}
