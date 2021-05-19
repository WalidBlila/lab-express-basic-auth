const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const salt = bcryptjs.genSaltSync(saltRounds);
const User = require("../models/User.model");

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  const hashedPassword = bcryptjs.hashSync(password, salt);
  console.log(`Password hash: ${hashedPassword}`);

  User.create({
    username,
    passwordHash: hashedPassword,
  })
    .then((userFromDB) => {
      console.log("Newly created user is: ", userFromDB);
    })
    .catch((error) => next(error));
});

router.get("/userProfile", (req, res, next) => {
    res.render("users/user-profile");
  })
  .then((userFromDB) => {
    console.log("Newly created user is: ", userFromDB);
    res.redirect("/userProfile");
  })
  .catch((err) => next(err));

module.exports = router;
