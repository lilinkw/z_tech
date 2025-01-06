"use client";

import { useRef } from "react";
import { About } from "./About";
import { Background } from "./Background";
import Countdown from "./Countdown";
import Games from "./Games";
import { NavigationButton } from "./NavigationButton";
import Partners from "./Partners";

interface IHomeClientProps {
  data: {
    publishedTime: React.ComponentProps<typeof Countdown>["endTime"];
    stats: React.ComponentProps<typeof About>["stats"];
    games: React.ComponentProps<typeof Games>["games"];
    partners: React.ComponentProps<typeof Partners>["partners"];
  };
}

export const HomeClient = ({ data }: IHomeClientProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const renderHero = () => (
    <section ref={heroRef} className="relative">
      <Background />
      <Countdown
        endTime={data.publishedTime}
        container={{
          className:
            "absolute top-[20%] md:top-[30%] w-full flex justify-center px-xs sm:px-0",
        }}
      />
    </section>
  );

  const onScroll: React.ComponentProps<typeof NavigationButton>["onScroll"] = (
    direction
  ) => {
    if (direction === "Up") {
      heroRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      partnersRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {renderHero()}
      <br className="mb-[128px]" />
      <About stats={data.stats} />
      <br className="mb-[128px]" />
      <Games games={data.games} />
      <br className="mb-[128px]" />
      <Partners
        partners={data.partners}
        container={{ className: "overflow-hidden", ref: partnersRef }}
      />
      <NavigationButton
        container={{ className: "fixed bottom-20 right-20" }}
        onScroll={onScroll}
      />
    </div>
  );
};
