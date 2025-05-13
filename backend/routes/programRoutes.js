const express = require("express");
const router = express.Router();
const programController = require("../controllers/programController");

router.post("/new-program", programController.createProgram);

router.get("/", programController.getAllPrograms);

router.get("/:email", programController.getProgramsByInstructor);

router.get("/programs-manage", programController.getProgramsForManagement);

router.patch("/change-status/:id", programController.updateProgramStatus);

router.get("/program-approve", programController.getApprovedPrograms);

router.get("/program/:id", programController.getProgramById);

router.put("/update-program/:id", programController.updateProgram);

router.get("/popular-programs", programController.getPopularPrograms);

module.exports = router;
