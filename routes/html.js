const express = require("express");
const router = express.Router();
const path = require("path");

// get index page
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// get exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// get stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});


module.exports = router;