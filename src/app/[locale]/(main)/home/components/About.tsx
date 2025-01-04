"use client";

import { Icons, TIconKeys } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

type TBenefitsKey = "info_1" | "info_2" | "info_3";

type TBenefit = {
  key: TBenefitsKey;
  icon: TIconKeys;
};

export const About = () => {
  const routesI18n = useScopedI18n("common.routes");
  const aboutI18n = useScopedI18n("pages.home.about");
  const gridWidth = 560;
  const gap = 40;
  const gridWidthWithGap = gridWidth * 2 + gap;

  const benefitsKey: Array<TBenefit> = [
    { key: "info_1", icon: "CalenderTick" },
    { key: "info_2", icon: "PenTool" },
    { key: "info_3", icon: "People" },
  ];

  return (
    <section
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2  text-black w-full max-w-7xl mx-auto place-items-center",
        `gap-[${gap}px]`
      )}
    >
      <aside
        className={cn(
          "w-full flex flex-col place-self-start gap-[80px]",
          `sm:w-[${gridWidth}px]`
        )}
      >
        <div className="flex flex-col gap-[40px]">
          <h1 className="w-full font-bolder justify-start leading-[60px] text-heading-md font-heading">
            {routesI18n("about")}
          </h1>
          <p>{aboutI18n(`description`)}</p>
        </div>
        <div className="flex flex-col gap-[40px]">
          <div>600</div>
          <div>125</div>
        </div>
      </aside>
      <aside className={cn("w-full", `sm:w-[${gridWidth}px]`)}>
        <ul className="flex flex-col font-sans gap-[40px] px-[75px] py-[113px] bg-[#EEEEEE]">
          {benefitsKey.map((value) => (
            <li key={value.key}>
              <h3 className="text-md font-bold">
                {aboutI18n(`benefits.${value.key}.title`)}
              </h3>
              <p>{aboutI18n(`benefits.${value.key}.description`)}</p>
            </li>
          ))}
        </ul>
      </aside>
      {/* </div> */}
      <aside className={cn("w-full sm:col-span-2 col-span-1")}>
        <div className={`sm:w-[${gridWidthWithGap}x]`}>Wizard</div>
      </aside>
    </section>
  );
};
