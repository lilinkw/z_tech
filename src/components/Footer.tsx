"use client";
import { useScopedI18n } from "@/locales/client";
import Image from "next/image";
import { Icons } from "./ui";
import { EmailForm } from "./form";

export const Footer = () => {
  const footerI18n = useScopedI18n("common.footer");
  return (
    <footer className="font-sans">
      <div className="bg-[url('/bg-footer.svg')] bg-cover bg-no-repeat bg-center grid grid-cols-1 md:grid-cols-4 text-white px-xs xl:px-[100px] 2xl:px-[230px] pt-[40px] md:pt-[104px] pb-[50px] md:pb-[100px] gap-x-40 gap-y-70">
        <div className="flex justify-center md:justify-[unset] col-span-1 md:col-span-2">
          <div className="md:ml-[40px] flex flex-col gap-40">
            <Image
              aria-hidden
              src="/white_logo.svg"
              alt="File icon"
              width={163}
              height={96}
            />
            <div className="flex gap-4">
              <Icons.TwitterFilled width={40} height={40} />
              <Icons.FacebookFilled width={40} height={40} />
              <Icons.LinkedInFilled width={40} height={40} />
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-40">
          <h4 className="text-md font-bold leading-30">
            {footerI18n("address.title")}
          </h4>
          <div className="flex flex-row gap-15 items-start">
            <Icons.MapPin width={50} height={50} />
            <div className="flex flex-col gap-[12px]">
              <p>{footerI18n("address.office_1")}</p>
              <p>{footerI18n("address.office_2")}</p>
            </div>
          </div>
          <div className="flex flex-row gap-15 items-start">
            <Icons.PhoneFilled width={30} height={30} />
            <p>{footerI18n("address.phone")}</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-40">
          <h4 className="text-md font-bold leading-30">
            {footerI18n("subscribe.title")}
          </h4>
          <div className="flex flex-col gap-[12px] items-start">
            <p>{footerI18n("subscribe.description")}</p>
            <EmailForm
              formClassName="w-full"
              emailInputProps={{
                placeholder: footerI18n("subscribe.placeholder"),
                variant: "ghost",
              }}
            />
          </div>
        </div>
      </div>
      <div className="py-[30px] bg-black text-center">
        <span className="text-white">{footerI18n("copyRight", { year: "2017" })}</span>
      </div>
    </footer>
  );
};
