import DestinationBenner from "@/components/banner/DestinationBenner";
import MapIframe from "@/components/core/MapIframe";
import HotelListSection from "@/components/lists/HotelListSection";
import { getDestinationItem } from "@/controller/destinationController";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const destination = await getDestinationItem(slug);

  return {
    title: `${destination.name} - Destination | ${process.env.SITE_TITLE}`,
  };
}

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
