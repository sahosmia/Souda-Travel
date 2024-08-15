"use client";
import { getCountry } from "@/controller/countryController";
import { CountryItemType } from "@/types/types";
import React, { useEffect, useState } from "react";

type DataType = { populerCountry?: CountryItemType[] };

const HomeHero = () => {
  const [search, setSearch] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState<DataType>({ populerCountry: [] });

  const fetchPopulerData = async () => {
    try {
      const response = await fetch("/api/countries");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData({ populerCountry: result.data });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/search?search=${search}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData({ populerCountry: result.data });
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    console.log(search);

    fetchAllData();
  }, [search]);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <section className="bg-cover bg-no-repeat bg-[url('/1.png')]">
      <div className="container pt-40 pb-80 mx-auto w-5/12">
        <h1 className="text-6xl font-semibold pb-4 text-center">
          Souda Travel
        </h1>
        <p className="pb-5 text-lg text-slate-700 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam
          suscipit obcaecati doloremque natus quod sint aut reiciendis earum ad.
        </p>

        <div className={`w-[500px] ${isClicked ? "bg-red-500" : ""}`}>
          <input
            type="text"
            className="border rounded-full w-full h-10 px-5"
            placeholder="Search Here Your Destination"
            onClick={handleClick}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search !== "" && (
            <div className="">
              {data?.populerCountry &&
                data?.populerCountry.map((country) => (
                  <h1 key={country.slug}>{country.name}</h1>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
