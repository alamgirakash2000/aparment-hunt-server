import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    title: String,
    image: String,
    location: String,
    bathroom: String,
    price: String,
    bedroom: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("services", instance);
