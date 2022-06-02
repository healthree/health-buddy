const { Clients } = require("../models");

const clientdata = [
  {
    name: "John Doe",
    date_of_birth: "December 10, 1980",
    date_of_enrollment: "January 10, 2022",
    symptoms: "dry throat, cough",
    medical_history: "",
    doctors_id: 1,
  },
  {
    name: "Jane Doe",
    date_of_birth: "June 25, 1989",
    date_of_enrollment: "February 22, 2022",
    symptoms: "severe headache",
    medical_history: "previous concussion",
    doctors_id: 1,
  },
  {
    name: "Preston M. Bewley",
    date_of_birth: "May 4, 2015",
    date_of_enrollment: "January 3, 2022",
    symptoms: "abdominal pain",
    medical_history: "",
    doctors_id: 3,
  },
  {
    name: "Tara H. Reyes",
    date_of_birth: "June 7, 1995",
    date_of_enrollment: "March 14, 2022",
    symptoms: "blurred vision",
    medical_history: "",
    doctors_id: 2,
  },
];

const seedClients = () => Clients.bulkCreate(clientdata);

module.exports = seedClients;
