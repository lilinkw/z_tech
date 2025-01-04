import { Playfair, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/providers/ThemeProvider";
import { I18nProviderClient } from "@/locales/client";
import { setStaticParamsLocale } from "next-international/server";

const playFair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  // Add the locales you want to support
  return ['en', 'vi'].map((locale) => ({
    params: { locale }, // Specify locale as a parameter
  }));
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
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
