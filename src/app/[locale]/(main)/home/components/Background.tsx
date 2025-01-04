import Image from "next/image";

const ELLIPSE_BG = "1296px_725px_at_50%_20%";

export const Background = () => {
  return (
    <div className="relative">
      <div
        className={`min-h-[988px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat [clip-path:ellipse(${ELLIPSE_BG})]`}
      ></div>
      <Image
        className="absolute top-0 left-0"
        aria-hidden
        src="/fairy.svg"
        alt="fairy"
        width={938}
        height={938}
      />
    </div>
  );
};
