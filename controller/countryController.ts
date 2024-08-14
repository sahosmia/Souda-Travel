import dbConnect from "@/lib/dbConnect";
import Country from "@/models/Country";
import Destination from "@/models/Destination";
import Hotel from "@/models/Hotel";

export const getCountry = async () => {
  await dbConnect();
  const countries = await Country.find();
  return countries;
};

export const getCountryItem = async (slug: string) => {
  await dbConnect();
  let country = await Country.findOne({ slug })
    .populate({
      path: "destinations",
      model: Destination,
    })
    .populate({
      path: "hotels",
      model: Hotel,
    })
    .exec();
  // .populate("hotels")
  // .populate("resturents")
  // .populate("foods");
  // const destinations = await Destination.find({ country_id: country._id });
  // country.destinations = destinations;
  // console.log(destinations);
  console.log(country);

  return country;
};

// export const getMostCountry = async () => {
//   await dbConnect();
//   const countries = await Country.find({ rank: null });
//   return countries;
// };
