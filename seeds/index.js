const seedDoctors = require("./doctorData");
const seedClients = require("./clientData");
const seedUsers = require("./userData");
const seedIssues = require("./issueData");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedIssues();
  await seedDoctors();
  await seedUsers();
  await seedClients();
  process.exit(0);
};

seedAll();
