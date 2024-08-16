import DestinationItem from "@/components/items/DestinationItem";
import { getDestination } from "@/controller/destinationController";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: `Destinations | ${process.env.SITE_TITLE}`,
};
const Resturents = async () => {
  const destinations = await getDestination();

  return (
    <section className="container">
      <div className="grid grid-cols-5 gap-4">
        {destinations.map((destination) => (
          <DestinationItem key={destination.slug} destination={destination} />
        ))}
      </div>
    </section>
  );
};

export default Resturents;
