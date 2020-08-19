const express = require("express");
const router = express.Router();
const Vegetable = require("../models/vegetables.js");

// Index
router.get("/", (req, res) => {
  Vegetable.find({}, (error, allVegetables) => {
    res.render("vegetables/Index", {
      vegetables: allVegetables,
    });
  });
});

// New
// GET http://localhost:3000/vegetables/new
// /new
router.get("/new", (req, res) => {
  res.render("vegetables/New");
});

// Create
// POST http://localhost:3000/vegetables
// /
router.post("/", (req, res) => {
  if (req.body.isGreen === "on") {
    req.body.isGreen = true;
  } else {
    req.body.isGreen = false;
  }
  Vegetable.create(req.body, (error, createdVegetable) => {
    res.redirect("/vegetables");
  });
});

module.exports = router;
