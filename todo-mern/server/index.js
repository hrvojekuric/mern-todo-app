import express from "express";
import cors from "cors";
import { router } from "./routes/todoRouter.js";
import mongoose from "mongoose";
import "dotenv/config.js";

const app = express();
const PORT = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.MONGODB_URL);

app.listen(process.env.PORT, () =>
  console.log("Connected on localhost: " + PORT)
);
