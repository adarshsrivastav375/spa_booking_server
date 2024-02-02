import mongoose from "mongoose";
const appointmentSchema = new mongoose.Schema(
  {
    business_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
      required: true,
    },
    customer_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    service_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
    start_time: { type: Date, required: true },
    end_time: { type: Date },
    is_cancelled: { type: Boolean, default: false },
    cancellation_time: { type: Date },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
