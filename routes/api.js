const express = require("express");
const router = express.Router();
const Workout = require("../models/workout.js");

// get workouts

router.get("/api/workouts", (req, res) => {

    Workout.find()
        .then(results => {
            res.json( results );
        })
        .catch(err =>{
            res.json(err);
        });

});

router.post("/api/workouts", (req, res) => {

    Workout.create({})
        .then(results => {
            res.json( results );
        })
        .catch(err =>{
            res.status(500).json(err);
        });

});

router.put("/api/workouts/:id", (req, res) =>{

    Workout.findByIdAndUpdate( 
        req.params.id, 
        { $push: { exercises: req.body }},
        { new: true, runValidators: true }
        )
            .then( results => {
                res.json( results );
            })
            .catch( err => {
                res.json(err);
            });

});

router.get("/api/workouts/range", async (req, res) => {

    Workout.find({})
        .limit(7)
        .then( results => {
            res.json(results);
        })
        .catch(err => {
            res.status(500).json(err);
        });
        
});

module.exports = router;