const express = require("express");

const games = require("../database/data");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Route to get a list of items
router.get("/games/:id", (req, res) => {
  const foundGame = games.find((game) => game.id === +req.params.id);
  if (foundGame) {
    res.status(200).json(foundGame);
  } else {
    res.status(404).json({ error: "Game not found" });
  }
});
/* ************************************************************************* */

module.exports = router;
