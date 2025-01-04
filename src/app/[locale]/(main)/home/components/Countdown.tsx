"use client";

import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import React from "react";

interface ICountdownProps {
  endTime?: string | Date;
  container?: Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
}
const defaultTime = new Date(2025, 3, 1, 0, 0, 0);

const Countdown = ({
  endTime: starTime = defaultTime,
  container,
}: ICountdownProps) => {
  const heroI18n = useScopedI18n("pages.home.hero");
  return (
    <div className={cn(container?.className)}>
      <p className="font-heading font-bolder text-[80px] text-white">
        {heroI18n("title")}
      </p>
    </div>
  );
};

export default React.memo(Countdown);
