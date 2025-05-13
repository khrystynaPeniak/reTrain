const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructorName: {
      type: String,
      required: true,
    },
    instructorEmail: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    submitted: {
      type: Date,
      default: Date.now,
    },
    totalEnrolled: {
      type: Number,
      default: 0,
    },
    reason: {
      type: String,
      default: null,
    },

    tags: {
      type: ["neck", "shoulders", "leg", "arm"],
      default: [],
    },
    durationWeeks: {
      type: Number,
      required: true,
      min: 1,
    },
    goal: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);
