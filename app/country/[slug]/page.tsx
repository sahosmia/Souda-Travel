import CountryBanner from "@/components/banner/CountryBanner";
import MapIframe from "@/components/core/MapIframe";
import DestinationListSection from "@/components/lists/DestinationListSection";
import HotelListSection from "@/components/lists/HotelListSection";
import { getCountry, getCountryItem } from "@/controller/countryController";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const country = await getCountryItem(slug);

  return {
    title: `${country.name} - Country | ${process.env.SITE_TITLE}`,
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
  const { destinations, hotels, map } = country;

  return (
    <>
      <CountryBanner country={country}></CountryBanner>
      <DestinationListSection destinations={destinations} />
      <HotelListSection hotels={hotels} />

      <MapIframe src={map} className="container h-96 rounded-lg w-full" />
    </>
  );
};

export default CountryDetails;
