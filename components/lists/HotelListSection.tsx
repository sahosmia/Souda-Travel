import SectionHeading from "../core/SectionHeading";
import { HotelItemType } from "@/types/types";
import NoDataMessage from "../core/NoDataMessage";
import HotelCarousel from "../carousel/HotelCarousel";

const HotelListSection = ({ hotels }: { hotels: HotelItemType[] }) => {
  // console.log(hotels);
  
  return (
    <div className="container py-8">
      <SectionHeading title="Hotels" />
      {hotels.length !== 0 ? (
        <HotelCarousel
          hotels={hotels}
          showItemClass="md:basis-1/3 lg:basis-1/5"
        />
      ) : (
        <NoDataMessage />
      )}
    </div>
  );
};

export default HotelListSection;
