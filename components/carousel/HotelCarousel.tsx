import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HotelItemType } from "@/types/types";
import HotelItem from "../items/HotelItem";

const HotelCarousel = ({
  hotels,
  showItemClass,
}: {
  hotels: HotelItemType[];
  showItemClass: string;
}) => {
  return (
    <Carousel>
      <CarouselContent>
        {hotels.map((item) => (
          <CarouselItem key={item.slug} className={showItemClass}>
            <HotelItem hotel={item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HotelCarousel;
