const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Select Workout Type"
    },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the Workout"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  sets: {
    type: Number,
    required: "Enter sets"
  },
  reps: {
    type: Number,
    required: "Enter reps"
  },
  duration: {
    type: Number,
    required: "Enter duration"
  }
});

const Resistance = mongoose.model("Workout", resistanceSchema);

module.exports = Resistance;
