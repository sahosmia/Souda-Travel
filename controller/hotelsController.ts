import dbConnect from "@/lib/dbConnect";
import Hotel from "@/models/Hotel";

export const getHotel = async () => {
  await dbConnect();
  const hotels = await Hotel.find();
  return hotels;
};


