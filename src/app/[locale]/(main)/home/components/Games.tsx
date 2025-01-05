"use client";

import { useScopedI18n } from "@/locales/client";
import Image from "next/image";

interface IGame {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

interface IGameCardProps {
  games: IGame[];
}

const Games = ({ games }: IGameCardProps) => {
  const gameI18n = useScopedI18n("pages.home.games");
  const renderGameCard = (game: IGame): React.JSX.Element => (
    <div key={game.id} className="col-span-1 relative even:top-[118px]">
      <Image
        className="rounded-[10px]"
        src={game.imageUrl}
        alt={game.title}
        width={410}
        height={560}
      />
      <div className="absolute bottom-[20px] text-white px-[8px] md:px-[32px]">
        <h3 className="font-bold text-md md:text-[48px] md:leading-[60px]">
          {game.title}
        </h3>
        <p className="text-xs md:text-sm font-regular leading-[15px] md:leading-0">
          {game.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col gap-16 px-xs md:px-[80px] mb-[118px]">
      <div className="self-center text-center gap-2">
        <h1 className="font-heading font-bolder text-large md:text-heading">
          {gameI18n("title")}
        </h1>
        <p className="max-w-[860px] font-sans text-gray font-regular text-sm">
          {gameI18n("description")}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-15 gap-y-20 md:gap-x-40 md:gap-y-[40px] ">
        {games?.map(renderGameCard)}
      </div>
    </section>
  );
};

export default Games;
