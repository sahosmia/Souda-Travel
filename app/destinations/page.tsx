import DestinationItem from "@/components/items/DestinationItem";
import { getDestination } from "@/controller/destinationController";

const Resturents = async () => {
  const destinations = await getDestination();
  // console.log(destinations);

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
