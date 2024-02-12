import express from "express";
import { Service } from "../models/service.js";

const router = express.Router();

//post a service
router.post("/add/:businessId", async (req, res) => {
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

//get all servises by an id

router.get("/:businessId", async (req, res) => {
  try {
    const services = await Service.find({ business_id: req.params.businessId });
    return res.status(200).send(services);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "no service found" });
  }
});

//delete a service
router.delete("/:businessId/:id", async (req, res) => {
  try {
    const deletedItem = await Service.findOneAndDelete({
      business_id: req.params.businessId,
      _id: req.params.id,
    });
    return res
      .status(200)
      .send({ message: "service deleted successfully", deletedItem });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "no service found" });
  }
});
//update service
router.put("/:businessId/:id", async (req, res) => {
  try {
    const updatedItem = await Service.findOneAndUpdate(
      {
        business_id: req.params.businessId,
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );
    return res
      .status(200)
      .send({ message: "service updated successfully", updatedItem });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error: "no service found" });
  }
});

export default router;
