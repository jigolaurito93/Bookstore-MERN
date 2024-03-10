import express from "express";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(234).send("Welcome to MERN stack Tutorial!");
});

// Middleware for routes
app.use("/books", booksRoute);

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
