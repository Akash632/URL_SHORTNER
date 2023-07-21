const express = require("express");
const {
  handleGenerateNewShortURL, handleUpdateURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.post("/update/:short_url",handleUpdateURL);

module.exports = router;
