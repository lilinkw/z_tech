import { chunkArray } from "@/lib/helper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { Icons } from "./Icons";

type TCarouselItem = {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
};

interface ICarouselProps {
  items: Array<TCarouselItem>;
  //   itemWidth: number | `${number}`;
  maxItemsDisplayed?: number;
  container?: Pick<React.HTMLAttributes<HTMLDivElement>, "className">;
  slides?: Pick<React.HTMLAttributes<HTMLDivElement>, "className"> & {
    maxWidth: number | `${number}`;
  };
}

const Carousel = ({
  items,
  maxItemsDisplayed,
  container,
  slides,
}: //   itemWidth,
ICarouselProps) => {
  const maxItems = maxItemsDisplayed ?? items.length;
  const slidesRef = useRef<HTMLDivElement>(null);
  const [slidePageNumber, setSlidePageNumber] = useState(0);

  const slidePages = useMemo(
    () => chunkArray(items, maxItems),
    [items, maxItems]
  );
  const canGoNext = useMemo(
    () => slidePageNumber < slidePages.length - 1,
    [slidePageNumber, slidePages.length]
  );
  const canGoBack = useMemo(
    () => slidePages.length > 0 && slidePageNumber > 0,
    [slidePageNumber, slidePages.length]
  );

  const handleNext = () => {
    debugger;
    if (canGoNext) {
      setSlidePageNumber((prev) => {
        debugger;
        return prev + 1;
      });
    }
  };

  const handleBack = () => {
    debugger;

    if (canGoBack) {
      setSlidePageNumber((prev) => prev - 1);
    }
  };

  const renderItem = useCallback(
    (item: TCarouselItem, index: number) => {
      const gap = 2;
      return (
        <li
          key={`${item.id}-${index}`}
          className={cn("flex flex-col gap-2 items-center justify-center")}
          style={{
            minWidth: `${
              (slides ? +slides?.maxWidth / maxItems : 260) - maxItems * 2
            }px`,
            height: "100px",
            gap: `${gap}px`,
          }}
        >
          <Image
            className="rounded-[10px]"
            src={item.imageUrl}
            alt={item.title}
            width={100}
            height={100}
          />
        </li>
      );
    },
    [slides, maxItems]
  );

  return (
    <div
      id="carousel-container-component"
      className={cn("flex items-center", container?.className)}
    >
      <button
        className="bg-white rounded-[10px] h-fit hover:bg-gray-300 px-2 py-2"
        style={{
          color: canGoBack ? "black" : "gray",
          pointerEvents: canGoBack ? "auto" : "none",
        }}
        onClick={handleBack}
      >
        <Icons.ChevronLeft />
      </button>
      <div
        ref={slidesRef}
        className={cn("overflow-hidden", slides?.className)}
        style={{ width: slides?.maxWidth }}
      >
        <ul className="flex items-center gap-4">
          {slidePages[slidePageNumber].map((item, index) =>
            renderItem(item, index)
          )}
        </ul>
      </div>

      <button
        className="bg-white rounded-[10px] h-fit hover:bg-gray-300 px-2 py-2"
        style={{
          color: canGoNext ? "black" : "gray",
          pointerEvents: canGoNext ? "auto" : "none",
        }}
        onClick={handleNext}
      >
        <Icons.ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
