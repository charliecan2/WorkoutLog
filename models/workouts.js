const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: "Please enter the type of workout you'll be doing."
            },
            name : {
                type: String,
                trim: true,
                required: "Please enter a name for your exercise."
            },
            duration : {
                type: Number,
                required: "Please input the duration of your workout in minutes."
            },
            weight: {
                type: Number
            },
            reps : {
                type: Number
            },
            sets : {
                type: Number
            },
            distance: {
                types: Number
            }
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}
)

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;