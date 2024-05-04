// create a task model
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
