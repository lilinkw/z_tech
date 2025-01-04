import Image from "next/image";
import { Background } from "./components/Background";
import { Metadata, ResolvingMetadata } from "next/types";
import { getScopedI18n } from "@/locales/server";
import Countdown from "./components/Countdown";

type Props = {
  params: Promise<{ id: string }>;
};

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

export default async function Home(props: Props) {
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

  return (
    <div className="">
      <div className="relative">
        <Background />
        <Countdown
          container={{
            className: "absolute top-[30%] w-full flex justify-center",
          }}
        />
      </div>
      {renderFooter()}
    </div>
  );
}
