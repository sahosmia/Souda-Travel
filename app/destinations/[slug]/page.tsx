import DestinationItemBenner from "@/components/banner/DestinationItemBenner";
import MapIframe from "@/components/core/MapIframe";
import HotelListSection from "@/components/lists/HotelListSection";
import {
  getDestination,
  getDestinationItem,
} from "@/controller/destinationController";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const destination = await getDestinationItem(slug);
  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }
  return {
    title: `${destination.name} - Destination`,
  };
}

export async function generateStaticParams() {
  const destnations = await getDestination();

  return destnations.map((destination) => ({
    slug: destination.slug,
  }));
}

const DestinationDetails = async ({ params }: { params: { slug: string } }) => {
  const destination = await getDestinationItem(params.slug);
  if (!destination) {
    notFound();
  }
  return (
    <>
      <DestinationItemBenner destination={destination} />
      <HotelListSection hotels={destination.hotels} />

      <MapIframe
        src={destination.map}
        className="container h-96 rounded-lg w-full"
      />
    </>
  );
};

export default DestinationDetails;
