import { Footer } from "@/components";
import Header from "@/components/Header";
import { I18nProviderClient } from "@/locales/client";
import type { ReactNode } from "react";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const { locale } = await params;
  return (
    <I18nProviderClient locale={locale}>
      <Header
        containers={{ className: "fixed top-0 z-50 w-screen" }}
      />
      <main>{children}</main>
      <Footer />
    </I18nProviderClient>
  );
}
