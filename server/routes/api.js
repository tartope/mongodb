const express = require("express");

const starWarsController = require("../controllers/starWarsController");

const router = express.Router();

router.get(
  "/",
  starWarsController.getCharacters,
  // (req, res) => res.status(200).json([])
  (req, res) => res.status(200).json(res.locals)
);

router.get("/species", starWarsController.getSpecies, (req, res) =>
  res.status(200).json({})
);

router.get("/homeworld", starWarsController.getHomeworld, (req, res) =>
  res.status(200).json({})
);

router.get("/film", starWarsController.getFilm, (req, res) =>
  res.status(200).json({})
);

router.post("/character", starWarsController.addCharacter, (req, res) =>
  res.status(200).json({})
);

module.exports = router;
