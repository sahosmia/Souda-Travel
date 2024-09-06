import SmallPgeBanner from "@/components/banner/SmallPgeBanner";
import { CountryItem } from "@/components/items/CountryItem";
import { getCountry } from "@/controller/countryController";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Country`,
};

const Country = async () => {
  const countries = await getCountry();

  return (
    <>
      <SmallPgeBanner
        title="Explore Countries"
        description="Discover diverse countries and their unique cultures. Find out more
          about top travel destinations around the world."
        image="/banner/country.jpg"
      />

      <section className="py-10">
        <div className=" container grid grid-cols-4 gap-4">
          {countries.map((country) => (
            <CountryItem key={country.slug} country={country} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Country;
