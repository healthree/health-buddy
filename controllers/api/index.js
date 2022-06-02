const router = require("express").Router();

const clientRoutes = require("./client-routes.js");
const doctorRoutes = require("./doctor-routes");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/clients", clientRoutes);
router.use("/doctors", doctorRoutes);
module.exports = router;
