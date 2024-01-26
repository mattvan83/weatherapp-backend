var express = require("express");
var router = express.Router();

const { checkBody } = require("../modules/checkBody");
const User = require("../models/users");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Check if email or password are empty or missing
  if (!checkBody(req.body, ["name", "email", "password"])) {
    res.json({
      result: false,
      error: "Missing or empty fields",
    });
    return;
  }

  // Check if email is already registered in database
  User.findOne({ email: email }).then((dbData) => {
    if (dbData) {
      res.json({ result: false, error: "User already exists" });
      return;
    } else {
      // Else register the new user
      const newUser = new User({
        name,
        email,
        password,
      });

      newUser.save().then((dbData) => {
        if (dbData) {
          res.json({ result: true });
        }
      });
    }
  });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  // Check if email or password are empty or missing
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({
      result: false,
      error: "Missing or empty fields",
    });
    return;
  }

  // Check if a user is found based on email and password
  User.findOne({ email, password }).then((dbData) => {
    if (dbData) {
      res.json({ result: true });
    } else {
      res.json({ result: false, error: "User not found" });
    }
  });
});

module.exports = router;
