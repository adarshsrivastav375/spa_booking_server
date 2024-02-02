import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
  },
});
export const Customer = mongoose.model("Customer", customerSchema);
