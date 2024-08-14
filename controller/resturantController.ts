import dbConnect from "@/lib/dbConnect";
import Restaurant from "@/models/Restaurant";

export const getRestaurant = async () => {
  await dbConnect();
  const restaurants = await Restaurant.find();
  return restaurants;
};
