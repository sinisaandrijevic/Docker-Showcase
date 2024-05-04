const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Movie = require("./database/movie.model");
const connect = require("./database/connect");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World!".rainbow);

  res.send("Hello World!");
});

app.get("/api/movie", async (req, res) => {
  const movie = await Movie.find();
  res.json(movie);
});

app.post("/api/movie", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.json(movie);
});

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
