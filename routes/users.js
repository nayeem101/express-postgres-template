var express = require("express");
var router = express.Router();

const User = require("../models/User");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.render("users", { users });
  } catch (error) {
    res.redirect("/");
    console.error(error);
  }
});

module.exports = router;
