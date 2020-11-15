import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    username: String,
    email: String,
    service: Object,
    message: String,
    phone: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("bookings", instance);
