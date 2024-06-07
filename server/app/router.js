const express = require("express");
const games = require("../database/data");
const router = express.Router();
const client = require("../database/client");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/games", (req, res) => {
  if (req.query.genre) {
    client
      .query("SELECT * FROM games WHERE genre = ?", [req.query.genre])
      .then((result) => {
        res.status(200).json(result[0]);
      });
  } else if (req.query.title) {
    client
      .query("SELECT * FROM games WHERE title LIKE ?", [`%${req.query.title}%`])
      .then((allTitle) => {
        res.status(200).json(allTitle[0]);
      });
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
  client.query("SELECT DISTINCT genre FROM games").then((genres) => {
    res.status(200).json(genres[0].map((game) => game.genre));
  });
});

router.get("/basket", (req, res) => {
  const game = games.slice(0, 6);
  res.status(200).json(game);
});

router.get("/games/:id", (req, res) => {
  client
    .query("SELECT * FROM games WHERE id = ?", [req.params.id])
    .then((result) => {
      res.status(200).json(result[0][0]);
    });
});

/* ************************************************************************* */

module.exports = router;
