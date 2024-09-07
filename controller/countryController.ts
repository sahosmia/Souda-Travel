import dbConnect from "@/lib/dbConnect";
import Country from "@/models/Country";
import Destination from "@/models/Destination";
import Hotel from "@/models/Hotel";

export const getCountry = async (search?: string) => {
  try {
    await dbConnect();
    let countries;

    if (search) {
      // Case-insensitive search using regex
      countries = await Country.find({
        name: { $regex: new RegExp(search, "i") },
      }).exec();
    } else {
      countries = await Country.find().exec();
    }
    return countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw new Error("Failed to fetch countries");
  }
};

export const getCountryItem = async (slug: string) => {
  await dbConnect();
  let country = await Country.findOne({ slug })
    .populate({
      path: "destinations",
      model: Destination,
      select: "name slug image",
    })
    .populate({
      path: "hotels",
      model: Hotel,
      select: "name slug image",
    })
    .exec();


  return country;
};

// export const getMostCountry = async () => {
//   await dbConnect();
//   const countries = await Country.find({ rank: null });
//   return countries;
// };
