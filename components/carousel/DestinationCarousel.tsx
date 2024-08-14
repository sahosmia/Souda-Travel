import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DestinationItemType } from "@/types/types";
import DestinationItem from "../items/DestinationItem";

const DestinationCarousel = ({
  destinations,
  showItemClass,
}: {
  destinations: DestinationItemType[];
  showItemClass: string;
}) => {
  return (
    <Carousel>
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

export default DestinationCarousel;
