import { DestinationItemType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DestinationItem = ({
  destination,
}: {
  destination: DestinationItemType;
}) => {
  const { name, slug, image } = destination;
  return (
    <Link href={`/destinations/${slug}`}>
      <Image
        src={`/destination/${image}`}
        alt={name}
        width={600}
        height={400}
        className="rounded min-h-60 object-cover "
        placeholder="blur"
        blurDataURL={`/destination/${image}`}
      />
      <h4 className="text-center py-3 text-lg font-medium">{name}</h4>
    </Link>
  );
};

export default DestinationItem;
