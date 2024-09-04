import { getCountry } from "@/controller/countryController";
import React, { memo } from "react";
import SectionHeading from "../core/SectionHeading";
import { CountryItem } from "../items/CountryItem";

const MostCountry = async () => {
  const countries = await getCountry();

  const filteredCountries = countries.filter((country) => country?.show);

  return (
    <section>
      <div className="container py-10">
        <div>
          <SectionHeading title="Top Country" />
        </div>

        <div className="grid grid-cols-4 gap-4">
          {filteredCountries.map((country) => (
            <CountryItem key={country.slug} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(MostCountry);
