import dbConnect from "@/lib/dbConnect";
import Country from "@/models/Country";
import Destination from "@/models/Destination";
import Hotel from "@/models/Hotel";

export const getDestination = async () => {
  await dbConnect();
  const destinations = await Destination.find().populate("country");
  return destinations;
};

export const getDestinationItem = async (slug: string) => {
  await dbConnect();
  let destination = await Destination.findOne({ slug })
    .populate({
      path: "country",
      model: Country,
    })
    .populate({
      path: "hotels",
      model: Hotel,
    })
    .exec();
  

  return destination;
};
