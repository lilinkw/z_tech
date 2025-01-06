"use client";

import { Icons } from "@/components";
import { useIsScroll } from "@/hooks";
import { cn } from "@/lib/utils";

interface INavigationButtonProps {
  container?: Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
  onScroll?: (direction: "Up" | "Down") => void;
}

export const NavigationButton = ({
  container,
  onScroll,
}: INavigationButtonProps) => {
  const { isScrolled } = useIsScroll();

  return (
    <button
      className={cn(
        "flex items-center gap-2 bg-white p-4 rounded-full shadow-xl shadow-black/50 pointer-events-auto",
        container?.className
      )}
      onClick={() => {
        if (onScroll) {
          onScroll(isScrolled ? "Up" : "Down");
        }
      }}
    >
      {isScrolled ? (
        <Icons.ChevronUp width={50} height={50} />
      ) : (
        <Icons.ChevronDown width={50} height={50} />
      )}
    </button>
  );
};
