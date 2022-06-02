const router = require("express").Router();
const sequelize = require("../config/connection");
const { Clients, User, Doctors } = require("../models");

router.get("/", (req, res) => {
  Doctors.findAll()
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("main", {
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
