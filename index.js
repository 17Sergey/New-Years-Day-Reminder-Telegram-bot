import express from "express";
import dotenv from "dotenv";

import { handler } from "./utils/handler.js";

dotenv.config();

const app = express();

app.use(express.json());

app.post("*", async (req, res) => {
  res.send(await handler(req));
});

app.get("*", async (req, res) => {
  res.send("Hello get");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function (err) {
  console.log("Server listening on PORT", PORT);
});
