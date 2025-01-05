"use client";

import { Icons, TIconKeys } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
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
      <div className="font-bold flex flex-col gap-2">
        <span className="text-heading leading-[97px]" aria-labelledby={type}>
          {stat.amount}
          {stat.unit && (
            <sub className="text-large leading-[48px]]">{stat.unit}</sub>
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
        "w-full flex flex-col place-self-start gap-[80px]",
        `sm:w-[${gridWidth}px]`
      )}
    >
      <div className="flex flex-col gap-40">
        <h1 className="w-full font-bolder justify-start leading-[60px] text-heading-md font-heading">
          {routesI18n("about")}
        </h1>
        <p className="font-sans font-regular text-sm text-gray">
          {aboutI18n(`description`)}
        </p>
      </div>
      <div className="flex flex-col gap-40 text-blue-light">
        {renderStat(stats.users, "users")}
        {renderStat(stats.games, "games")}
      </div>
    </aside>
  );

  const renderBenefitGrid = (): React.JSX.Element => (
    <aside className={cn("w-full", `sm:w-[${gridWidth}px]`)}>
      <ul className="flex flex-col font-sans gap-40 px-[75px] py-[113px] bg-[#EEEEEE]">
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
            <Image src="/wizard.svg" alt="Wizard" width={437} height={533} />
          </div>

          <div className="relative bottom-[100px]">
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
