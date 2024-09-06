"use client";
import { ArrowRight } from "lucide-react";
import SearchItem from "./SearchItem";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { CountryItemType } from "@/types/types";
import { motion } from "framer-motion";

type DataType = { populerCountry: CountryItemType[] };

export function SearchSection() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const box = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<DataType>({ populerCountry: [] });
  const router = useRouter();

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

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?search=${search}`);
  };
  return (
    <div
      className={`${
        isClicked ? " h-screen absolute top-0 left-0 w-full z-10 pt-10" : ""
      }`}
    >
      <div
        className={`relative max-w-[90%] lg:w-[500px] m-auto ${
          isClicked ? "bg-white rounded z-10" : ""
        }`}
        ref={box}
        onClick={handleClick}
      >
        <form className="relative" onSubmit={handleSubmit}>
          <input
            type="text"
            className={`border w-full h-10 pl-5 pr-10 rounded`}
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
                <SearchItem key={slug} url={`/country/${slug}`} title={name} />
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
