import express from "express";
import { Business } from "../models/business.js";

const router = express.Router();

// signUP
router.post("/sign-up", async (req, res) => {
  try {
    const business = await Business.findOne({ email: req.body.email });
    if (business) {
      return res
        .status(201)
        .send({ status: false, message: "Email already exist" });
    }
    const response = await Business.create(req.body);
    return res.status(200).send({
      status: true,
      message: "Business registered successfully",
      response,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "bad request" });
  }
});
// log-in
router.post("/login", async (req, res) => {
  try {
    const business = await Business.findOne({ email: req.body.email });
    if (!business) {
      return res
        .status(201)
        .send({ status: false, message: "Email does not exist" });
    }
    if (business.password === req.body.password) {
      return res.status(200).send({
        status: true,
        message: "login successful",
        id: business._id,
      });
    } else {
      return res.status(401).send({
        status: false,
        message: "user id or password incorrect",
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "bad request" });
  }
});
// find all company;
router.get("/", async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "internal server Error" });
  }
});
// fined one by id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findById(id);
    if (!business) {
      return res.status(404).json({ error: "Business not found" });
    }
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBusiness = await Business.findByIdAndDelete(id);
    if (!deletedBusiness) {
      return res.status(404).json({ error: "Book not Found" });
    }
    res.status(200).json({ message: "Business deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBusiness = await Business.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBusiness) {
      return res.status(404).json({ error: "Business not found" });
    }
    res.status(200).json(updatedBusiness);
  } catch (error) {
    res.status(400).json({ error: "bad request" });
  }
});

export default router;
