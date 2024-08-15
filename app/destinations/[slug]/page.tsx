import DestinationBenner from "@/components/banner/DestinationBenner";
import MapIframe from "@/components/core/MapIframe";
import HotelListSection from "@/components/lists/HotelListSection";
import { getDestinationItem } from "@/controller/destinationController";

const DestinationDetails = async ({ params }: { params: { slug: string } }) => {
  const destination = await getDestinationItem(params.slug);

  return (
    <>
      <DestinationBenner destination={destination} />
      <HotelListSection hotels={destination.hotels} />
    
      <MapIframe
        src={destination.map}
        className="container h-96 rounded-lg w-full"
      />
    </>
  );
};

export default DestinationDetails;
