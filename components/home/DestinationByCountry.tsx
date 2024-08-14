import { getCountryItem } from "@/controller/countryController";
import DestinationListSection from "../lists/DestinationListSection";

const DestinationByCountry = async ({ slug }: { slug: string }) => {
  const country = await getCountryItem(slug);

  return (
    <DestinationListSection
      destinations={country.destinations}
      title={country.name}
    />
  );
};

export default DestinationByCountry;
