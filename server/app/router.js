const express = require("express");

const games = require("../database/data");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Route to get a list of items
router.get("/games", (req, res) => {
  res.status(200).json(games);
});
router.get("/genre", (req, res) => {
  res.status(200).json(games);
});
router.get("/basket", (req, res) => {
  const game = games.slice(0, 6);
  res.status(200).json(game);
});

router.get("/games/:id", (req, res) => {
  const foundGame = games.find((game) => game.id === +req.params.id);
  if (foundGame) {
    res.status(200).json(foundGame);
  } else {
    res.status(200).json({});
  }
});
/* ************************************************************************* */

module.exports = router;
