import express from "express";
import { Service } from "../models/service.js";

const router = express.Router();

router.post("/:businessId", async (req, res) => {
  try {
    const newService = new Service({
      ...req.body,
      business_id: req.params.businessId,
    });
    const savedService = await newService.save();
    res.status(201).json(savedService);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "bad request" });
  }
});

export default router;
