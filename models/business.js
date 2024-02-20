import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  email: {
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
  chairs: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Business = mongoose.model("Business", businessSchema);
