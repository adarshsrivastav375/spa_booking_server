import express from "express";
import { request, response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 3002;
const mongo_url = process.env.MONGO_URL;
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to the Api spa");
});
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("app is connected to data base");
    app.listen(port, () => {
      console.log("app is listen to port:" + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
