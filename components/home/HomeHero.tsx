"use client";
import React, { useEffect, useRef, useState } from "react";
import { CountryItemType } from "@/types/types";
import SearchItem from "./SearchItem";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

type DataType = { populerCountry: CountryItemType[] };

const HomeHero: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [data, setData] = useState<DataType>({ populerCountry: [] });
  const box = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const fetchPopulerData = async () => {
    try {
      const response = await fetch("/api/countries");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData({
        populerCountry: Array.isArray(result.data) ? result.data : [],
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          `/api/search?search=${encodeURIComponent(search)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData({
          populerCountry: Array.isArray(result.data) ? result.data : [],
        });
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setData({ populerCountry: [] });
      }
    };

    fetchAllData();
  }, [search]);

  const handleClick = () => {
    setIsClicked(true);
  };

  const clickOutOfDiv = (e: globalThis.MouseEvent) => {
    if (box.current && !box.current.contains(e.target as Node)) {
      setIsClicked(false); // Close the dropdown
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutOfDiv);
    return () => {
      document.removeEventListener("mousedown", clickOutOfDiv);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
    router.push(`/search?search=${search}`);
  };

  return (
    <section className="bg-cover bg-no-repeat bg-[url('/1.png')] relative">
      <div className="container pt-40 pb-80 mx-auto w-5/12">
        <h1 className="text-6xl font-semibold pb-4 text-center">
          Souda Travel
        </h1>
        <p className="pb-5 text-lg text-slate-700 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem magnam
          suscipit obcaecati doloremque natus quod sint aut reiciendis earum ad.
        </p>

        <div
          className={`${
            isClicked
              ? "bg-black bg-opacity-50 h-screen absolute top-0 left-0 w-full"
              : ""
          }`}
        >
          <div
            className={`w-[500px] m-auto ${
              isClicked ? "bg-white rounded" : ""
            }`}
            ref={box}
            onClick={handleClick} // Clicking the box should open the dropdown
          >
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="text"
                className={`border w-full h-10 pl-5 pr-10 ${
                  isClicked ? "rounded" : "rounded-full"
                }`}
                placeholder="Search Here Your Destination"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className=" absolute right-2 top-1/2 -translate-y-1/2"
                type="submit"
              >
                <ArrowRight />
              </button>
            </form>

            {isClicked && search !== "" && (
              <div className="p-4 max-h-72 overflow-auto">
                {data.populerCountry.length > 0 ? (
                  data.populerCountry.map(({ slug, name }) => (
                    <SearchItem
                      key={slug}
                      url={`/country/${slug}`}
                      title={name}
                    />
                  ))
                ) : (
                  <p>No results found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
