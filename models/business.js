import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  GSTIN: {
    type: String,
    required: true,
  },
  PAN: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  workSchedule: {
    type: Object,
    required: true,
  },
  number_of_chairs: {
    type: Number,
    required: true,
  },
});
export const Buseness = mongoose.model("buseness", businessSchema);
