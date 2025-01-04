"use client";

import { Suspense, lazy } from "react";
import { setStaticParamsLocale } from "next-international/server";

export async function generateStaticParams() {
  // Add the locales you want to support
  return ["en", "vi"].map((locale) => ({
    params: { locale }, // Specify locale as a parameter
  }));
}

const ErrorPageComp = lazy(() => import("@/components/ui/error-components"));

interface IErrorPageProps {
  params: {
    locale: string;
  };
}

const ErrorPage = ({ params }: IErrorPageProps) => {
  setStaticParamsLocale(params.locale);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorPageComp type={"NotFound"} />
    </Suspense>
  );
};

export default ErrorPage;
