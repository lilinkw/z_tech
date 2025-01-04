"use client";

export type TErrorPageProps = {
  type?: "Error" | "NotFound";
  error?: Error & { digest?: string };
  reset?: () => void;
};

export function ErrorFn({ type = "NotFound", error, reset }: TErrorPageProps) {
  const isProduction = process.env.NODE_ENV === "production";
  return <div>Error</div>;
}

export default ErrorFn;
