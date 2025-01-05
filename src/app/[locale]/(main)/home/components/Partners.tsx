"use client";

import Carousel from "@/components/ui/Carousel";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

type TPartner = {
  id: number;
  name: string;
  logoUrl: string;
};

interface IPartnersProps {
  partners: TPartner[];
  container?: Pick<React.HTMLAttributes<HTMLElement>, "className">;
}

const Partners = ({ partners, container }: IPartnersProps) => {
  const partnersI18n = useScopedI18n("pages.home.partners");
  return (
    <section
      className={cn(
        "bg-[#F6F6F6] flex flex-col items-center gap-16 py-[120px]",
        container?.className
      )}
    >
      <h1 className=" text-center gap-2  font-heading font-bolder text-large md:text-heading leading-50 md:leading-0">
        {partnersI18n("title")}
      </h1>
      <Carousel
        items={partners.map((p) => ({
          id: p.id,
          title: p.name,
          description: p.name,
          imageUrl: p.logoUrl,
        }))}
        maxItemsDisplayed={5}
        slides={{ maxWidth: 1200 }}
      />
    </section>
  );
};

export default Partners;
