import DestinationByCountry from "@/components/home/DestinationByCountry";
import HomeHero from "@/components/home/HomeHero";
import MostCountry from "@/components/home/MostCountry";

export default async function Home() {
  return (
    <>
      <HomeHero />
      <MostCountry />
      <DestinationByCountry slug="bangladesh" />
      <div>
        <iframe
          width="100%"
          className="h-96"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.678402209539!2d90.3754885153465!3d23.777176793480274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c767c72f7b7d%3A0x222cabc9ec847d42!2sBangladesh!5e0!3m2!1sen!2sbd!4v1604399381463!5m2!1sen!2sbd"
        />
      </div>
    </>
  );
}
