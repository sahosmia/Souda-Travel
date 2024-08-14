import dbConnect from "@/lib/dbConnect";
import Country from "@/models/Country";
import Destination from "@/models/Destination";

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
    .exec();
  // .populate("hotels")
  // .populate("resturents")
  // .populate("foods");
  // const destinations = await Destination.find({ country_id: country._id });
  // country.destinations = destinations;
  // console.log(destinations);
  console.log(destination);

  return destination;
};
