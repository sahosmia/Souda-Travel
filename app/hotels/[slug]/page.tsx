import React from "react";

import type { Metadata } from "next";
import { getDestinationItem } from "@/controller/destinationController";

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

const HotelDetails = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default HotelDetails;
