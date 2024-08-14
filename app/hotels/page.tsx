import HotelItem from "@/components/items/HotelItem";
import { getHotel } from "@/controller/hotelsController";
import React from "react";

const Hotels = async () => {
  const hotels = await getHotel();

  return (
    <section className="container">
      <div className="grid grid-cols-5 gap-4">
        {hotels.map((hotel) => (
          <HotelItem key={hotel.slug} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};

export default Hotels;
