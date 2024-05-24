const express = require("express");

const games = require('../database/data');

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Route to get a list of items
router.get("/games", (req, res) => {
  res.status(200).json(games);
});

router.get("/basket", (req, res) => {
  const game = games.slice(0, 6);
  res.status(200).json(game);
});
/* ************************************************************************* */

module.exports = router;
