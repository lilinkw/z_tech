"use client";

import { useMediaQuery } from "@/hooks";
import { EScreenSize } from "@/lib/screen";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ELLIPSE_BG = "[clip-path:ellipse(1296px_725px_at_50%_20%)]";
export const Background = () => {
  const mdWidth = useMediaQuery(`(min-width: ${EScreenSize.MD})`);
  return (
    <div className="relative">
      <div
        className={`min-h-[988px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat ${ELLIPSE_BG}`}
      ></div>
      <Image
        className={cn("absolute top-[75%] left-[100px] md:top-0 md:left-0")}
        aria-hidden
        src="/fairy.svg"
        alt="fairy"
        width={mdWidth ? 938 : 351}
        height={mdWidth ? 400 : 351}
      />
    </div>
  );
};
