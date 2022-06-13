const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "Glenda",
    email: "Jensen@email.com",
    password: "Jensen",
  },
  {
    username: "James",
    email: "James@email.com",
    password: "James",
  },
  {
    username: "Paul",
    email: "Thompson@email.com",
    password: "Thompson",
  },
  {
    username: "Teresa",
    email: "Teresa@email.com",
    password: "Teresa",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
