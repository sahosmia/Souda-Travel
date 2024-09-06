import React, { memo } from "react";

const HotleBanner = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[200px] md:h-[300px] lg:h-[400px]"
      style={{ backgroundImage: `url("${image}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default memo(HotleBanner);
