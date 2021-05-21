const express = require("express");
const router = express.Router();

router.get("/privatePage", (req, res, next) => {
  if (!req.session.currentUser) {
    res.redirect("/");
  }
  res.render("private", { userInSession: req.session.currentUser });
});

module.exports = router;
