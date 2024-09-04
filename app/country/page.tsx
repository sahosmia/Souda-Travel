import CountryBanner from "@/components/banner/CountryBanner";
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
      <CountryBanner />

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
