const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter a type of exercise."

                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter name of exercise."
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: "Enter duration of exercise."
                },
                weight: {
                    type: Number,
                    trim: true,
                    required: "Enter your current weight."
                },
                reps: {
                    type: Number,
                    trim: true,
                    required: "Enter number or reps."
                },
                sets: {
                    type: Number,
                    trim: true,
                    required: "Enter number of sets."
                },
                distance: {
                    type: Number
                }
            }
        ],
    },
    {
        toJSON: {
            virtuals: true
        }
    }

);