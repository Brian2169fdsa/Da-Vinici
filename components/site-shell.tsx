import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatWidget } from "@/components/chat-widget";

/** Header + main + footer wrapper used by every page. */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="pt-[74px]">
        {children}
      </main>
      <SiteFooter />
      <ChatWidget />
    </>
  );
}
