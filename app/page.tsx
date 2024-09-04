import DestinationByCountry from "@/components/home/DestinationByCountry";
import HomeHero from "@/components/home/HomeHero";
import MostCountry from "@/components/home/MostCountry";


export default async function Home() {
  return (
    <>
      <HomeHero />
      <MostCountry />
      <DestinationByCountry slug="bangladesh" />
    </>
  );
}
