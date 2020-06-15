const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: Date,
  exercises: [
    {
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
    // required: "Enter weight"
  },
  sets: {
    type: Number,
    // required: "Enter sets"
  },
  reps: {
    type: Number,
    // required: "Enter reps"
  },
  duration: {
    type: Number,
    // required: "Enter duration"
  },
  distance: {
    type: Number,
    // required: "Enter distance"
  }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
