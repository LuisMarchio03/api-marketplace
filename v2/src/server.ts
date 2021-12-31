import "dotenv/config";
import "reflect-metadata";

import express from "express";
import cors from "cors";

import "./database";
import "./shared/container";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(5555, () => {
  console.log("Server is running on port 5555");
});
