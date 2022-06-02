const seedDoctors = require("./doctorData");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedDoctors();
  console.log("--------------");
  process.exit(0);
};

seedAll();
