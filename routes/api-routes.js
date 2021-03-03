const router = require('express').Router();
const Workout = require('../models/workout.js');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})
  
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

router.put('/api/workouts/:id', ({params, body}, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: { exercises: body}}, 
        {new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get('/api/workouts/range', ({query}, res) => {
    Workout.find({day: {$gte: query.start, $lte: query.end}})
    .then(dbWorkouts => {
        res.json(dbWorkouts)
      })
    .catch(err => {
        res.status(400).json(err);
    })
})
  
module.exports = router;