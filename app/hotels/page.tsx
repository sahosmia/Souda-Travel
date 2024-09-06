import HotelItem from "@/components/items/HotelItem";
import { getHotel } from "@/controller/hotelsController";
import React from "react";
import { Metadata } from "next";
import SmallPgeBanner from "@/components/banner/SmallPgeBanner";
export const metadata: Metadata = {
  title: `Hotels`,
};
const Hotels = async () => {
  const hotels = await getHotel();

  return (
    <>
      <SmallPgeBanner
        title="Explore Hotels"
        description="Discover diverse countries and their unique cultures. Find out more
          about top travel destinations around the world."
        image="/banner/hotel.jpg"
      />
      <section className="py-10">
        <div className="container grid grid-cols-5 gap-4">
          {hotels.map((hotel) => (
            <HotelItem key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hotels;
