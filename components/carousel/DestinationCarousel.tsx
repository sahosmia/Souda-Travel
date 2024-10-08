import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DestinationItemType } from "@/types/types";
import DestinationItem from "../items/DestinationItem";
import { memo } from "react";

const DestinationCarousel = ({
  destinations,
  showItemClass,
}: {
  destinations: DestinationItemType[];
  showItemClass: string;
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {destinations.map((item) => (
          <CarouselItem key={item.slug} className={showItemClass}>
            <DestinationItem destination={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default memo(DestinationCarousel);
