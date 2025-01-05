"use client";
import { useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { Icons } from "./ui";

export const Footer = () => {
  const footerI18n = useScopedI18n("common.footer");
  return (
    <footer>
      <div className="bg-[url('/bg-footer.svg')] bg-cover bg-no-repeat bg-center grid grid-cols-3">
        <div>
          <Image
            aria-hidden
            src="/white_logo.svg"
            alt="File icon"
            width={108}
            height={64}
          />
          <div className="text-white flex gap-4">
            <Icons.TwitterFilled />
            <Icons.FacebookFilled />
            <Icons.LinkedInFilled />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div>
        <span>{footerI18n("copyRight", { year: "2017" })}</span>
      </div>
    </footer>
  );
};
