import { HotelItemType, ResturentItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResturentItem = ({ resturent }: { resturent: ResturentItemType }) => {
  const { name, slug } = resturent;
  return (
    <Link href={`/resturents/${slug}`}>
      <Image
        src={`/resturent/phoenix-desert-resort.jpg`}
        alt={name}
        width={600}
        height={400}
        className="rounded min-h-48 object-cover"
        placeholder="blur"
        blurDataURL={`/resturent/phoenix-desert-resort.jpg`}
      />
      <h4 className="text-center py-3 text-xl font-semibold">{name}</h4>
    </Link>
  );
};

export default ResturentItem;
