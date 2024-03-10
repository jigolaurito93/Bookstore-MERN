import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get("/", (req, res) => {
  res.status(234).send("Welcome to MERN stack Tutorial!");
});

// connect mongodb
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");
    app.listen(PORT, (req, res) => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
