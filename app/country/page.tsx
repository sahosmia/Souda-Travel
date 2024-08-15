import { CountryItem } from "@/components/items/CountryItem";
import { getCountry } from "@/controller/countryController";
import React from "react";

const Country = async () => {
  const countries = await getCountry();

  return (
    <section className="container">
      <div className="grid grid-cols-4 gap-4">
        {countries.map((country) => (
          <CountryItem key={country.slug} country={country} />
        ))}
      </div>
    </section>
  );
};

export default Country;
