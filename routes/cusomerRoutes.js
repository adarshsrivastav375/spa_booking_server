import express from "express";
import { Customer } from "../models/customer.js";

const router = express.Router();

// sign UP

router.post("/sign-up", async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email });
     if (customer) {
       return res
         .status(200)
         .send({ status: false, message: "Email already exist" });
     }
    const response = await Customer.create(req.body);
    res
      .status(201)
      .send({
        status: true,
        message: "Customer created successfully",
        response,
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: "bad request" });
  }
});

//log in
router.post("/sign-up", async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email });
    if (!customer) {
      return res
        .status(200)
        .send({ status: false, message: "No user exist with this email" });
    } else {
      if (customer.password === req.body.password) {
        return res.status(401).send({
          status: true,
          message: "Login successfull",
          id: customer._id,
        });
      }
    }
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: "bad request" });
  }
});






//find all user
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).json({ error: "no user found" });
    }
    res.json(customer);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
});
//update
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedCustomer) {
      return res.status(404).json({ error: "no Customer found" });
    }
    res.json(updatedCustomer);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});
//delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await Customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "no customer found" });
    }
    res.status(200).json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
});
export default router;
