import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  about: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Destination" }],
});

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);

export default Hotel;
