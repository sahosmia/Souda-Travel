import React, { memo } from "react";

const DestinationBanner = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[200px] md:h-[300px] lg:h-[400px]"
      style={{ backgroundImage: `url("/banner/destination.jpg")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Explore Destination
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl">
          Discover diverse countries and their unique cultures. Find out more
          about top travel destinations around the world.
        </p>
      </div>
    </section>
  );
};

export default memo(DestinationBanner);
