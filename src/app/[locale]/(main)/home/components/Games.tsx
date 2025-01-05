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
  games?: IGame[];
}

const Games = ({ games }: IGameCardProps) => {
  console.log("games", games);
  const gameI18n = useScopedI18n("pages.home.games");
  const renderGameCard = (game: IGame): React.JSX.Element => (
    <div>
      <Image src={game.imageUrl} alt={game.title} width={410} height={560} />
      <span>{game.title}</span>
    </div>
  );

  return (
    <section className="flex flex-col gap-16">
      <div className="self-center text-center gap-2">
        <h1 className="font-heading font-bolder text-heading">
          {gameI18n("title")}
        </h1>
        <p className="max-w-[860px] font-sans text-gray font-regular text-sm">
          {gameI18n("description")}
        </p>
      </div>
      <div className="flex flex-col gap-16">
        {games?.map((game) => (
          <div key={game.id}>{renderGameCard(game)}</div>
        ))}
      </div>
    </section>
  );
};

export default Games;
