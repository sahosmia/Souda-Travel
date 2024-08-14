import CountryBanner from "@/components/banner/CountryBanner";
import MapIframe from "@/components/core/MapIframe";
import DestinationListSection from "@/components/lists/DestinationListSection";
import HotelListSection from "@/components/lists/HotelListSection";
import { getCountryItem } from "@/controller/countryController";

const CountryDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const country = await getCountryItem(slug);
  const { destinations, hotels, map } = country;

  return (
    <>
      <CountryBanner country={country}></CountryBanner>
      <DestinationListSection destinations={destinations} />
      <HotelListSection hotels={hotels} />
      
      <MapIframe src={map} className="container h-96 rounded-lg w-full"/>
    </>
  );
};

export default CountryDetails;
