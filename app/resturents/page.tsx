import ResturentItem from "@/components/items/ResturentItem";
import { getRestaurant } from "@/controller/resturantController";
import React from "react";

const Resturents = async () => {
  const resturents = await getRestaurant();

  return (
    <section className="container">
      <div className="grid grid-cols-5 gap-4">
        {resturents.map((resturent) => (
          <ResturentItem key={resturent.slug} resturent={resturent} />
        ))}
      </div>
    </section>
  );
};

export default Resturents;
