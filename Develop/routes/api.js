const router = require("express").Router();
const Resistance = require("../models/resistance.js");
const Cardio = require("../models/cardio.js");

router.post("/api/workouts", (req, res) => {
    Resistance.create({})
      .then(dbresistance => {
        res.json(dbresistance);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
    Resistance.find({})
      .sort({ date: -1 })
      .then(dbresistance => {
        res.json(dbresistance);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", ({body, params}, res) => {
    Resistance.findByIdAndUpdate(
        { _id: params.id }, { $push: {exercises: body}}, {new: true, runvalidators: true})
        .then(dbresistance => {
            res.json(dbresistance);
        })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;