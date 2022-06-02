const seedDoctors = require("./doctorData");
const seedClients = require("./clientData");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedDoctors();
  console.log("--------------");

  await seedClients();
  console.log("--------------");

  process.exit(0);
};

seedAll();
