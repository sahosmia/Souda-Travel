import { CountryItemType } from "@/types/types";
import React from "react";

const CountryBanner = ({ country }: { country: CountryItemType }) => {
  const { name, image } = country;
  return (
    <section
      className={`bg-cover bg-no-repeat bg-center `}
      style={{ backgroundImage: `url("/country/${image}")` }}
    >
      <div className="container text-center py-60 mx-auto w-5/12">
        <h1 className="text-6xl font-semibold pb-4">{name}</h1>
        <p className="pb-5 text-lg text-slate-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam
          suscipit obcaecati doloremque natus quod sint aut reiciendis earum ad.
        </p>
      </div>
    </section>
  );
};

export default CountryBanner;
