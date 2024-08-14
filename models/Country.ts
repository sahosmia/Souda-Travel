import mongoose from "mongoose";

const CountriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String },
  show: { type: Number },
  map: { type: String },
  destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Destination" }],
  hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }],
  resturents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resturent" }],
  // foods: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }],
});

const Country =
  mongoose.models.Country || mongoose.model("Country", CountriesSchema);

export default Country;
