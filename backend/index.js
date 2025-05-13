//const express = require("express");
//const cors = require("cors");
//const dotenv = require("dotenv");
//const connectDB = require("./config/db");

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config({});
connectDB();
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

// khrystynapeniak22
// Dtk34Hp5Js0ijCtS
