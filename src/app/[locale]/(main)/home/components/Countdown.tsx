"use client";

import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import React, { useCallback, useEffect, useState } from "react";

interface ICountdownProps {
  endTime?: string | Date;
  container?: Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
}
const defaultTime = new Date(2025, 3, 1, 0, 0, 0);

const enum ETimeUnits {
  Days = "days",
  Hours = "hours",
  Minutes = "minutes",
  Seconds = "seconds",
}

const Countdown = ({ endTime = defaultTime, container }: ICountdownProps) => {
  const heroI18n = useScopedI18n("pages.home.hero");
  const timeI18n = useScopedI18n("common.time");
  const [timeLeft, setTimeLeft] = useState<Map<ETimeUnits, number>>(
    new Map([
      [ETimeUnits.Days, 0],
      [ETimeUnits.Hours, 0],
      [ETimeUnits.Minutes, 0],
      [ETimeUnits.Seconds, 0],
    ])
  );
  useEffect(() => {
    const calculateTimeLeft = () => {
      const end = new Date(endTime).getTime();
      const now = new Date().getTime();
      const difference = end - now;

      if (difference > 0) {
        const newTime = new Map([
          [ETimeUnits.Days, Math.floor(difference / (1000 * 60 * 60 * 24))],
          [ETimeUnits.Hours, Math.floor((difference / (1000 * 60 * 60)) % 24)],
          [
            ETimeUnits.Minutes,
            Math.floor((difference / (1000 * 60 * 60)) % 24),
          ],
          [ETimeUnits.Seconds, Math.floor((difference / 1000) % 60)],
        ]);
        setTimeLeft(newTime);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [endTime]);

  const renderTimeSlot = (value: number, postfixText: string) => (
    <div>
      <span>{value}</span>
      <span className="ml-1">{postfixText}</span>
    </div>
  );

  const renderCountDownTable = useCallback(() => {
    return (
      <div className="flex gap-4 bg-white text-black text-2xl p-12 rounded-md">
        {Array.from(timeLeft.keys()).map((key) => {
          const timeValue = Number(timeLeft.get(key));
          const text = timeI18n(key, { count: timeValue });
          return <div key={key}>{renderTimeSlot(timeValue, text)}</div>;
        })}
      </div>
    );
  }, [timeLeft]);

  return (
    <div className={cn(container?.className)}>
      <div className="flex flex-col items-center">
        <p className="font-heading font-bolder text-[80px] text-white">
          {heroI18n("title")}
        </p>
        {renderCountDownTable()}
      </div>
    </div>
  );
};

export default React.memo(Countdown);
