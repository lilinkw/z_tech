import type { Metadata } from "next";
import { Playfair, Montserrat } from "next/font/google";
import "./globals.css";
import { getCurrentLocale } from "../../locales/server";
import Header from "@/components/Header";
import Providers from "@/providers/ThemeProvider";
import { I18nProviderClient } from "@/locales/client";

const playFair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getCurrentLocale();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${playFair.variable} ${montserrat.variable} `}>
        <Providers>
          <I18nProviderClient locale={locale}>
            <main className="min-h-screen gap-16">
              <Header
                containers={{ className: "absolute top-0 z-50 w-full" }}
              />
              {children}
            </main>
          </I18nProviderClient>
        </Providers>
      </body>
    </html>
  );
}
