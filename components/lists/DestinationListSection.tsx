import React from "react";
import SectionHeading from "../core/SectionHeading";
import DestinationCarousel from "../carousel/DestinationCarousel";
import { DestinationItemType } from "@/types/types";
import NoDataMessage from "../core/NoDataMessage";

const DestinationListSection = ({
  destinations,
  title = "Designations",
}: {
  destinations: DestinationItemType[];
  title?: string;
}) => {
  return (
    <div className="container py-8">
      <SectionHeading title={title} />
      {destinations.length !== 0 ? (
        <DestinationCarousel
          destinations={destinations}
          showItemClass="md:basis-1/3 lg:basis-1/4"
        />
      ) : (
        <NoDataMessage />
      )}
    </div>
  );
};

export default DestinationListSection;
