const router = require("express").Router();

const clientRoutes = require("./client-routes.js");
const doctorRoutes = require("./doctor-routes");
const userRoutes = require("./user-routes");
const issueRoutes=require("./issue-routes");

router.use("/users", userRoutes);
router.use("/clients", clientRoutes);
router.use("/doctors", doctorRoutes);
router.use("/issue",issueRoutes);

module.exports = router;
