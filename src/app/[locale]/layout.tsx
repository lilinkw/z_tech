import { Playfair, Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
import { setStaticParamsLocale } from "next-international/server";

const playFair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
