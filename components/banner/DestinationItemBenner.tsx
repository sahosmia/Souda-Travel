import { DestinationItemType } from "@/types/types";
import { memo } from "react";

const DestinationItemBenner = ({
  destination,
}: {
  destination: DestinationItemType;
}) => {
  const { name, image, about, thumbnail } = destination;

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: `url("/destination/thumbnail/${thumbnail}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {name}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl">
          {about}
        </p>
      </div>
    </section>
  );
};

export default memo(DestinationItemBenner);
