"use client";

import { useMediaQuery } from "@/hooks";
import { EScreenSize } from "@/lib/screen";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ELLIPSE_BG_MD = "[clip-path:ellipse(1296px_725px_at_50%_20%)]";
const ELLIPSE_BG = "[clip-path:ellipse(1072px_565px_at_50%_12%)]";
export const Background = () => {
  const lgScreen = useMediaQuery(`(min-width: ${EScreenSize.LG})`);
  return (
    <div className="relative h-[824px] md-h-[unset]">
      <div
        className={cn(
          `min-h-[668px] md:min-h-[988px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat`,
          lgScreen ? ELLIPSE_BG_MD : ELLIPSE_BG
        )}
      ></div>
      <Image
        className={cn("absolute top-[65%] left-[26%] lg:top-0 lg:left-0")}
        aria-hidden
        src="/fairy.svg"
        alt="fairy"
        width={lgScreen ? 938 : 342}
        height={lgScreen ? 400 : 258}
      />
    </div>
  );
};
