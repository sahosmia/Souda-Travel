import CountryItemBanner from "@/components/banner/CountryItemBanner";
import MapIframe from "@/components/core/MapIframe";
import DestinationListSection from "@/components/lists/DestinationListSection";
import HotelListSection from "@/components/lists/HotelListSection";
import { getCountry, getCountryItem } from "@/controller/countryController";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const country = await getCountryItem(slug);
  if (!country) {
    return {
      title: "Country Not Found",
    };
  }
  return {
    title: `${country.name} - Country`,
  };
}

export async function generateStaticParams() {
  const countries = await getCountry();

  return countries.map((country) => ({
    slug: country.slug,
  }));
}

const CountryDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const country = await getCountryItem(slug);
  if (!country) {
    notFound();
  }
  console.log(country);

  const { destinations, hotels, map } = country;

  return (
    <>
      <CountryItemBanner country={country}></CountryItemBanner>
      <DestinationListSection destinations={destinations} />
      <HotelListSection hotels={hotels} />

      <MapIframe src={map} className="container h-96 rounded-lg w-full" />
    </>
  );
};

export default CountryDetails;
