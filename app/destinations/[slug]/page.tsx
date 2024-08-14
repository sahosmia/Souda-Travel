import { getDestinationItem } from "@/controller/destinationController";
import React from "react";

const DestinationDetails = async ({ params }: { params: { slug: string } }) => {
  const destination = await getDestinationItem(params.slug);
  console.log(destination);

  return <div>{destination.country.name}</div>;
};

export default DestinationDetails;
