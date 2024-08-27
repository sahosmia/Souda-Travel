"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { CountryItemType } from "@/types/types";
import SearchItem from "@/components/home/SearchItem";
import { CountryItem } from "@/components/items/CountryItem";

type DataType = { populerCountry: CountryItemType[] };

const SearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get("search") || "";
  const [searchInput, setSearchInput] = useState<string>(search);
  const [data, setData] = useState<DataType>({ populerCountry: [] });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          `/api/search?search=${encodeURIComponent(searchInput)}`
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
  }, [searchInput]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    // Update the search params in the URL
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search"); // Remove the search param if the input is empty
    }

    router.push(`?${params.toString()}`, undefined);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full p-8 bg-blue-600 text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Search Destinations</h1>
        <div className="relative max-w-lg mx-auto">
          <input
            type="text"
            value={searchInput}
            onChange={handleChange}
            placeholder="Type to search..."
            className="w-full p-4 pr-12 text-gray-800 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <svg
            className="w-6 h-6 absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="container">
        {/* Search Results */}
        <div className="flex-1 p-8 w-full mx-auto">
          {search ? (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Search Results for &quot;{search}&quot;
              </h2>

              {data.populerCountry.length > 0 ? (
                <div className="grid grid-cols-4 gap-4">
                  {data.populerCountry.map((country) => (
                    <CountryItem key={country.slug} country={country} />
                  ))}
                </div>
              ) : (
                <p>No results found</p>
              )}
              
            </div>
          ) : (
            <h2 className="text-xl text-gray-600 text-center">
              Please enter a search term to find destinations.
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
