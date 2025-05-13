require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// Import Routes
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello Developers");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// khrystynapeniak22
// Dtk34Hp5Js0ijCtS
