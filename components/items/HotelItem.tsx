import { HotelItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HotelItem = ({ hotel }: { hotel: HotelItemType }) => {
  const { name, slug, image } = hotel;
  // console.log(hotel);

  return (
    <Link href={`/hotels/${slug}`}>
      <Image
        src={`/hotel/${image}`}
        alt={name}
        width={600}
        height={400}
        className="rounded min-h-48 object-cover"
        placeholder="blur"
        blurDataURL={`/hotel/${image}`}
      />
      <h4 className="text-center py-3 text-lg font-medium">{name}</h4>
    </Link>
  );
};

export default HotelItem;
