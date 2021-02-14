const path = require("path");
const Workout = require("../models/workout.js");

// get workouts
module.exports = function( app ) {

    app.get("/api/workouts", (req, res) => {

        Workout.find()
            .then(results => {
                res.json( results );
            })
            .catch(err =>{
                res.status(500).json(err);
            });

    });

    app.get("/api/workouts", (req, res) => {

        Workout.create(req.body)
            .then(results => {
                res.json( results );
            })
            .catch(err =>{
                res.status(500).json(err);
            });

    });

    app.put("/api/workouts/:id", (req, res) =>{

        Workout.findByIdAndUpdate( 
            req.params.id, 
            { $push: { exercises: req.body }},
            { new:true, runValidators: true })
                .then( results => {
                    res.json( results );
                })
                .catch( err => {
                    res.status(500).json(err);
                });

    });

    app.get("/api/workouts/range", (req, res) => {

        Workout.find({}).limit(5)
            .then( results => {
                res.json(results);
            })
            .catch(err => {
                res.status(500).json(err);
            });
            
    });

}