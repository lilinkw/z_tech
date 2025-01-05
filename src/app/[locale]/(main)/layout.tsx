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
      <main className="min-h-screen gap-16">
        <Header
          containers={{ className: "absolute top-0 z-50 w-full text-white" }}
        />
        {children}
        <Footer />
      </main>
    </I18nProviderClient>
  );
}
