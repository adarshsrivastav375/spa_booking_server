import mongoose from "mongoose";

const serviceSchema = new mongoose.schema({
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
});
export const Servises = mongoose.model("Services", serviceSchema);
