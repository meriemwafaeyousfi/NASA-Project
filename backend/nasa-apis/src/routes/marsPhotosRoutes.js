const express = require("express");
const { fetchMarsPhotos } = require("../controllers/marsPhotosController");

const router = express.Router();
router.get("/", fetchMarsPhotos);

module.exports = router;
