const User = require("./User");
const Doctors = require("./Doctors");
const Clients = require("./Clients");
const Issues = require("./Issues");

Doctors.hasMany(Clients, {
  foreignKey: "doctors_id",
});

Clients.belongsTo(Doctors, {
  foreignKey: "doctors_id",
});

Clients.hasMany(Issues, {
  foreignKey: "issue_id",
});

Issues.belongsTo(Clients, {
  foreignKey: "issue_id",
});

module.exports = { User, Doctors, Clients, Issues };
