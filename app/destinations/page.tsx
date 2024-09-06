import SmallPgeBanner from "@/components/banner/SmallPgeBanner";
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
      <SmallPgeBanner
        title="Explore Destinations"
        description="Discover diverse countries and their unique cultures. Find out more
          about top travel destinations around the world."
        image="/banner/destination.jpg"
      />
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
