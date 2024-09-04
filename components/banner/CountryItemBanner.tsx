import { CountryItemType } from "@/types/types";
import React, { memo } from "react";

const CountryItemBanner = ({ country }: { country: CountryItemType }) => {
  const { name, image } = country;

  return (
    <section
      className="relative bg-cover bg-no-repeat bg-center h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: `url("/country/${image}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {name}
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-300 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magnam
          suscipit obcaecati doloremque natus quod sint aut reiciendis earum ad.
        </p>
      </div>
    </section>
  );
};

export default memo(CountryItemBanner);
