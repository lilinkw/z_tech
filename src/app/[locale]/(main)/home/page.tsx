import Image from "next/image";
import { Background } from "./components/Background";
import Countdown from "./components/Countdown";
import { About } from "./components/About";
import Games from "./components/Games";
import React from "react";
// import dynamic from "next/dynamic";
import gamesJson from "@/app/data/prominent_games.json";

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
  const renderFooter = () => (
    <footer className="bg-[#F6F6F6] text-black">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>
  );

  const renderHero = () => (
    <section className="relative">
      <Background />
      <Countdown
        endTime={PUBLISH_TIME}
        container={{
          className: "absolute top-[30%] w-full flex justify-center",
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
      <Games games={gamesJson}/>
      {renderFooter()}
    </div>
  );
}
