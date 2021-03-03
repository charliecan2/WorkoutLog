const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
app.get('/exercise', (req, res) => {
  res.sendFile(__dirname + '/public/exercise.html')
})
app.get('/stats', (req, res) => {
  res.sendFile(__dirname + '/public/stats.html')
})

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(require('./routes/api-routes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });