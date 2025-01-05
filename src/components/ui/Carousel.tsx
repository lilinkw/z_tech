import Image from "next/image";
import { useMemo, useRef, useState } from "react";

interface ICarouselProps {
  items: Array<{
    id: number;
    title: string;
    description?: string;
    imageUrl: string;
  }>;
  maxItemsDisplayed?: number;
}

const Carousel = ({ items, maxItemsDisplayed }: ICarouselProps) => {
  const maxItems = maxItemsDisplayed ?? items.length;
  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = Math.ceil(items.length / maxItems);

  const handleNext = () => {
    setStartIndex((startIndex + maxItems) % items.length);
  };

  const handleBack = () => {
    setStartIndex((startIndex - maxItems + items.length) % items.length);
  };

  const renderItem = (item: ICarouselProps["items"][number]) => {
    return (
      <div
        key={item.id}
        className="flex flex-col gap-2 flex-shrink-0 w-full"
        style={{ width: `${100 / totalSlides}%` }}
      >
        <Image
          className="rounded-[10px]"
          src={item.imageUrl}
          alt={item.title}
          width={260}
          height={100}
        />
      </div>
    );
  };

  const slides = useMemo(() => {
    const slideArrays = [];
    for (let i = 0; i < items.length; i += maxItems) {
      const slideItems = [];
      for (let j = 0; j < maxItems; j++) {
        const itemIndex = (i + j) % items.length; // Calculate the wrapped index
        slideItems.push(items[itemIndex]);
      }
      slideArrays.push(slideItems);
    }
    return slideArrays;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, maxItems]);

  const activeSlideIndex = Math.floor(startIndex / maxItems);

  return (
    <div className="w-full relative" ref={containerRef}>
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeSlideIndex * 100}%)`,
            width: `fit-content`,
          }}
        >
          {/* Render each slide with wrapped items */}
          {slides.map((slideItems, slideIndex) => (
            <div key={slideIndex} className="flex">
              {slideItems.map((item) => renderItem(item))}
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full"
        onClick={handleBack}
      >
        {"<"}
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-full"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
