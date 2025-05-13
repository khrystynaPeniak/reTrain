const express = require("express");
const router = express.Router();

const programRoutes = require("./programRoutes");

router.use("/programs", programRoutes);

module.exports = router;
