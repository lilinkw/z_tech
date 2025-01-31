import { About } from "./components/About";

// import dynamic from "next/dynamic";
import gamesJson from "@/data/prominent_games.json";
import partnersJson from "@/data/partners.json";
import { HomeClient } from "./components/HomeClient";

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
  return (
    <HomeClient
      data={{
        publishedTime: PUBLISH_TIME,
        stats: STATS,
        games: gamesJson,
        partners: partnersJson,
      }}
    />
  );
}
