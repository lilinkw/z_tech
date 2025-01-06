"use client";

import { Icons, TIconKeys } from "@/components/ui/Icons";
import { useMediaQuery } from "@/hooks";
import { EScreenSize } from "@/lib/screen";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";
import Image from "next/image";
import { createElement } from "react";

type TBenefitsKey = "info_1" | "info_2" | "info_3";

type TBenefit = {
  key: TBenefitsKey;
  icon: TIconKeys;
};

type TStat = {
  amount: number;
  unit?: string;
};

export interface IAboutProps {
  stats: {
    users: TStat;
    games: TStat;
  };
  container?: Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
}

export const About = ({ stats }: IAboutProps) => {
  const routesI18n = useScopedI18n("common.routes");
  const aboutI18n = useScopedI18n("pages.home.about");
  const gridWidth = 560;
  const gap = 40;
  const gridWidthWithGap = gridWidth * 2 + gap;
  const mdWidth = useMediaQuery(`(min-width: ${EScreenSize.MD})`);

  const benefitsKey: Array<TBenefit> = [
    { key: "info_1", icon: "CalenderTick" },
    { key: "info_2", icon: "PenTool" },
    { key: "info_3", icon: "People" },
  ];

  const renderStat = (
    stat: TStat,
    type: "users" | "games"
  ): React.JSX.Element => {
    const statsIndex: "info_1" | "info_2" =
      type === "users" ? "info_1" : "info_2";
    return (
      <div className="font-bold flex flex-col gap-[4px] md:gap-2 w-1/2 md:w-[unset]">
        <span
          className="text-[44px] md:text-heading md:leading-[97px]"
          aria-labelledby={type}
        >
          {stat.amount}
          {stat.unit && (
            <sub className="text-[20px] md:text-large leading-[48px]]">
              {stat.unit}
            </sub>
          )}
          {"+"}
        </span>
        <span className="text-black leading-[30px] text-md">
          {aboutI18n(`stats.${statsIndex}.description`)}
        </span>
      </div>
    );
  };

  const renderStatsGrid = (): React.JSX.Element => (
    <aside
      className={cn(
        "w-full flex flex-col place-self-start gap-[80px] px-xs md:px-0",
        `sm:w-[${gridWidth}px]`
      )}
    >
      <div className="flex flex-col gap-[16px] md:gap-40">
        <h1 className="w-full font-bolder justify-start leading-[60px] text-large md:text-heading-md font-heading">
          {routesI18n("about")}
        </h1>
        <p className="font-sans font-regular text-sm text-gray">
          {aboutI18n(`description`)}
        </p>
      </div>
      <div className="flex w-full md:w-[unset] flex-row md:flex-col gap-[16px] md:gap-40 text-blue-light">
        {renderStat(stats.users, "users")}
        {renderStat(stats.games, "games")}
      </div>
    </aside>
  );

  const renderBenefitGrid = (): React.JSX.Element => (
    <aside className={cn("w-full", `sm:w-[${gridWidth}px]`)}>
      <ul className="flex flex-col font-sans gap-[40px] md:gap-40 px-xs py-[40px] md:px-[75px] md:py-[113px] bg-[#EEEEEE]">
        {benefitsKey.map((value) => (
          <li key={value.key} className="grid grid-cols-4">
            <div className="col-span-1 text-center">
              <div className="bg-white flex items-center justify-center w-[50px] h-[50px] rounded-full text-center">
                {createElement(Icons[value.icon], {
                  width: 24,
                  height: 24,
                })}
              </div>
            </div>
            <div className="flex flex-col col-span-3">
              <h3 className="text-md font-bold">
                {aboutI18n(`benefits.${value.key}.title`)}
              </h3>
              <p className="font-sans font-regular text-sm text-gray">
                {aboutI18n(`benefits.${value.key}.description`)}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );

  const renderWizardGrid = (): React.JSX.Element => (
    <aside className={cn("w-full sm:col-span-2 col-span-1")}>
      <div className={`sm:w-[${gridWidthWithGap}x]`}>
        <div className="relative w-full h-auto flex flex-col justify-center items-center">
          <div className="z-10">
            <motion.div
              initial={{ x: "180%", scale: 0.5 }}
              whileInView={{ x: 0, scale: 1 }}
              // transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src="/wizard.svg"
                alt="Wizard"
                width={mdWidth ? 437 : 300}
                height={mdWidth ? 533 : 243}
              />
            </motion.div>
          </div>

          <div className="relative bottom-[32px] md:bottom-[100px]">
            <Image src="/pin-map.svg" alt="Pin Map" width={1160} height={420} />
          </div>
        </div>
      </div>
    </aside>
  );
  return (
    <section
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2  text-black w-full max-w-7xl mx-auto place-items-center",
        `gap-x-[${gap}px] gap-y-[68px]`
      )}
    >
      {renderStatsGrid()}
      {renderBenefitGrid()}
      {renderWizardGrid()}
    </section>
  );
};
