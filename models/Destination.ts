import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  about: { type: String, required: true },
  location: { type: String, required: true },
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }],
});

const Destination =
  mongoose.models.Destination ||
  mongoose.model("Destination", DestinationSchema);

export default Destination;
