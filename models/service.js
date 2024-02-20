import mongoose from "mongoose";
import { Business } from "./business.js";

const serviceSchema = new mongoose.Schema({
  business_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bussiness",
    required: true,
  },
  serviceName: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  totalSeat: {
    type: Number,
    required: true,
  },
  filled: {
    type: Number,
  },
  
});
export const Service = mongoose.model("Service", serviceSchema);
