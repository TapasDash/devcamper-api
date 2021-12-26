import express from "express";
import dotenv from "dotenv";

//load config vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const { PORT, NODE_ENV } = process.env;

app.listen(
  PORT || 5000,
  console.log(`App is running on ${NODE_ENV} listening on the ${PORT}`)
);
