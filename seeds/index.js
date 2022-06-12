const seedDoctors = require("./doctorData");
const seedClients = require("./clientData");
const seedUsers = require("./userData");
const seedIssues = require("./issueData");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedDoctors();
  console.log("--------------");
  await seedClients();
  console.log("--------------");
  await seedUsers();
  console.log("--------------");
  await seedIssues();
  process.exit(0);
};

seedAll();
