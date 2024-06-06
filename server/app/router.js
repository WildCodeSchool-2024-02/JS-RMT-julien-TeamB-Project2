const express = require("express");

const games = require("../database/data");

const router = express.Router();

const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
// Route to get a list of items
router.get("/games", (req, res) => {
  if (req.query.genre) {
    res
      .status(200)
      .json(games.filter((game) => game.genre === req.query.genre));
  } else if (req.query.title) {
    const { title } = req.query;
    const flGames = games.filter((g) =>
      g.title.toLowerCase().includes(title.toLowerCase())
    );
    res.status(200).json(flGames);
  } else if (req.query.type === "carousel") {
    client
      .query("SELECT title, image, id FROM games ORDER BY RAND() LIMIT 6")
      .then((dataCarousel) => {
        res.status(200).json(dataCarousel[0]);
      });
  } else {
    res.status(200).json(games);
  }
});

router.get("/genres", (req, res) => {
  client
    .query("SELECT DISTINCT genre FROM games")
    .then((genres) =>
      res.status(200).json(genres[0].map((game) => game.genre))
    );
});

router.get("/basket", (req, res) => {
  const game = games.slice(0, 6);
  res.status(200).json(game);
});

router.get("/games/:id", (req, res) => {
  client
    .query("SELECT * FROM games WHERE id = ?", [req.params.id])
    .then((result) => res.status(200).json(result[0][0]));
});

/* ************************************************************************* */

module.exports = router;
