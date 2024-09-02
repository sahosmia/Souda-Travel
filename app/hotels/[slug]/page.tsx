import React from "react";

import type { Metadata } from "next";
import { getDestination, getDestinationItem } from "@/controller/destinationController";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const hotel = await getDestinationItem(slug);

  return {
    title: `${hotel.name} - Hotel | ${process.env.SITE_TITLE}`,
  };
}

export async function generateStaticParams() {
  const destnations = await getDestination();

  return destnations.map((destination) => ({
    slug: destination.slug,
  }));
}


const HotelDetails = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default HotelDetails;
