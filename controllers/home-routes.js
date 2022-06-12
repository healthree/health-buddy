const router = require("express").Router();
const sequelize = require("../config/connection");
const { Clients, User, Doctors, Issues } = require("../models");

router.get("/", (req, res) => {
  Doctors.findAll({
    include: {
      model: Clients,
      attributes: ["name", "symptoms"],
    },
  })
    .then((dbPostData) => {
      const doctors = dbPostData.map((doctors) => doctors.get({ plain: true }));
      res.render("homepage", {
        doctors,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/doctor", (req, res) => {
  Doctors.findAll({
    include: {
      model: Clients,
      attributes: ["name", "symptoms"],
    },
  })
    .then((dbPostData) => {
      const doctors = dbPostData.map((doctors) => doctors.get({ plain: true }));
      res.render("doctor", {
        doctors,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/doctor/:id", (req, res) => {
  Doctors.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Clients,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No doctor found with this id" });
        return;
      }

      const doctor = dbPostData.get({ plain: true });

      res.render("single-doctor", {
        doctor,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/client/:id", (req, res) => {
  Clients.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No client found with this id" });
        return;
      }

      const client = dbPostData.get({ plain: true });

      res.render("single-client", {
        client,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/issues", (req, res) => {
  Issues.findAll()
    .then((dbPostData) => {
      const issues = dbPostData.map((issues) => issues.get({ plain: true }));
      res.render("issues", {
        issues,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/BMI", (req, res) => {
  res.render("BMI");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/issue", (req, res) => {
  res.render("issues");
});

module.exports = router;
