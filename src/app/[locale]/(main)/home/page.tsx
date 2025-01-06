import { Background } from "./components/Background";
import Countdown from "./components/Countdown";
import { About } from "./components/About";
import Games from "./components/Games";
import Partners from "./components/Partners";

// import dynamic from "next/dynamic";
import gamesJson from "@/data/prominent_games.json";
import partnersJson from "@/data/partners.json";

// type Props = {
//   params: Promise<{ id: string }>;
// };

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const id = await params;
//   const metaI18n = await getScopedI18n("pages.home.metadata");

//   return {
//     title: metaI18n("title"),
//     description: metaI18n("description"),
//   };
// }

const PUBLISH_TIME = new Date(2025, 3, 1, 0, 0, 0);

const STATS: React.ComponentProps<typeof About>["stats"] = {
  users: {
    amount: 600,
    unit: "M",
  },
  games: { amount: 135 },
};
export default async function Home() {
  const renderHero = () => (
    <section className="relative">
      <Background />
      <Countdown
        endTime={PUBLISH_TIME}
        container={{
          className:
            "absolute top-[20%] md:top-[30%] w-full flex justify-center px-xs sm:px-0",
        }}
      />
    </section>
  );

  return (
    <div className="">
      {renderHero()}
      <br className="mb-[128px]" />
      <About stats={STATS} />
      <br className="mb-[128px]" />
      <Games games={gamesJson} />
      <br className="mb-[128px]" />
      <Partners
        partners={partnersJson}
        container={{ className: "overflow-hidden" }}
      />
    </div>
  );
}
