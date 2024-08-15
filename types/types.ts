export type CountryItemType = {
  name: string;
  slug: string;
  image: string;
  show?: number;
  map: string;
  destinations: string[];
  hotels: string[];
  resturents?: string[];
};

export type HotelItemType = {
  name: string;
  slug: string;
  about: string;
  location: string;
  image: string;
};

export type ResturentItemType = {
  name: string;
  slug: string;
  about: string;
  location: string;
  image: string;
};
export type DestinationItemType = {
  name: string;
  slug: string;
  about: string;
  location: string;
  image: string;
  thumbnail: string;
};
