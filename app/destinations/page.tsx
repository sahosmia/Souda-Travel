import DestinationBanner from "@/components/banner/DestinationBanner";
import DestinationItem from "@/components/items/DestinationItem";
import { getDestination } from "@/controller/destinationController";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Destinations`,
};
const Resturents = async () => {
  const destinations = await getDestination();

  return (
    <>
      <DestinationBanner />
      <section className="py-10">
        <div className="container grid grid-cols-5 gap-4">
          {destinations.map((destination) => (
            <DestinationItem key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Resturents;
