const express = require("express");
const { fetchMarsWeather } = require("../controllers/marsWeatherController");

const router = express.Router();
router.get("/", fetchMarsWeather);

module.exports = router;
