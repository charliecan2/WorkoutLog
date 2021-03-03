const router = require('express').Router();
const Workouts = require('../models/workouts.js');

router.get('/api/workouts', (req, res) => {
    Workouts.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})
  
router.post('/api/workouts', (req, res) => {
    Workouts.create({})
    .then(dbWorkouts => {
      res.json(dbWorkouts)
    })
    .catch(err => {
      res.status(400).json(err);
    })
});

router.put('/api/workouts/:id', ({body, params}, res) => {
    Workouts.findByIdAndUpdate(
        params.id,
        {$push: { exercises: body}}, {new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.get('/api/workouts/range', ({query}, res) => {
    Workouts.find({day: {$gte: query.start, $lte: query.end}})
    .then(dbWorkouts => {
        res.json(dbWorkouts)
      })
    .catch(err => {
        res.status(400).json(err);
    })
})

router.delete('/api/workouts', ({ body }, res) => {
    Workouts.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true)
      })
    .catch(err => {
        res.status(400).json(err);
    })
})
  
module.exports = router;