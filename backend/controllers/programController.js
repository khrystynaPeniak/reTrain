const Program = require("../models/Program");

exports.createProgram = async (req, res) => {
  try {
    const newProgram = req.body;
    newProgram.availableSeats = parseInt(newProgram.availableSeats);

    const ProgramDoc = new Program(newProgram);
    const result = await ProgramDoc.save();

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.getProgramsByInstructor = async (req, res) => {
  try {
    const email = req.params.email;

    const programs = await Program.find({ instructorEmail: email });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.getProgramsForManagement = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.updateProgramStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const { status, reason } = req.body;

    const updatedProgram = await Program.findByIdAndUpdate(
      id,
      {
        status,
        reason,
      },
      { new: true, runValidators: true }
    );

    if (!updatedProgram) {
      return res.status(404).json({ error: true, message: "Class not found" });
    }

    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.getApprovedPrograms = async (req, res) => {
  try {
    const programs = await Program.find({ status: "approved" });
    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.getProgramById = async (req, res) => {
  try {
    const id = req.params.id;

    const ProgramDoc = await Program.findById(id);

    if (!ProgramDoc) {
      return res.status(404).json({ error: true, message: "Class not found" });
    }

    res.status(200).json(ProgramDoc);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.updateProgram = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const updatedProgram = await Program.findByIdAndUpdate(
      id,
      {
        name: updatedData.name,
        description: updatedData.description,
        price: updatedData.price,
        availableSeats: updatedData.availableSeats,
        image: updatedData.image,
        tags: updatedData.tags,
        goal: updatedData.goal,
        durationInWeeks: updatedData.durationInWeeks,
        level: updatedData.level,
        status: "pending",
      },
      { new: true, runValidators: true }
    );

    if (!updatedProgram) {
      return res.status(404).json({ error: true, message: "Class not found" });
    }

    res.status(200).json(updatedProgram);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};

exports.getPopularPrograms = async (req, res) => {
  try {
    const popularPrograms = await Program.find()
      .sort({ totalEnrolled: -1 })
      .limit(6);

    res.status(200).json(popularPrograms);
  } catch (error) {
    res.status(500).json({ error: true, message: error.message });
  }
};
