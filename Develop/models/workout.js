const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Number,
    default: Date.now
  },
  exercises: 
     [
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
    // ref: "Enter weight"
  },
  sets: {
    type: Number,
    // ref: "Enter sets"
  },
  reps: {
    type: Number,
    // ref: "Enter reps"
  },
  duration: {
    type: Number,
    // ref: "Enter duration"
  },
  distance: {
    type: Number,
    // ref: "Enter distance"
  }
}
  ]
 
  // exercises: [{
  //   type: String,
  //   name: String,
  //   weight: Number,
  //   sets: Number,
  //   reps: Number,
  //   duration: Number,
  //   distance: Number
  
  //  }
  // ]
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
