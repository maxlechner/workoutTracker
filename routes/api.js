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



}