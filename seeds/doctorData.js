const { Doctors } = require("../models");

const doctordata = [
  {
    name: "Dr. Glenda Z. Jensen",
    speciality: "General physician",
    years_of_experience: 6,
    gender: "Female",
    availability: "Monday to Wednesday 3pm - 9pm",
    note: "This is a super good Doctor, A++",
  },
  {
    name: "Dr. James Brennerman",
    speciality: "Optometry",
    years_of_experience: 3,
    gender: "Male",
    availability: "Saturday to Tuesday 9am - 4pm",
    note: "This is the worst Doctor in the world",
  },
  {
    name: "Dr. Paul Thompson",
    speciality: "pediatrician",
    years_of_experience: 11,
    gender: "Male",
    availability: "Tuesday to Friday 10am - 6pm",
  },
  {
    name: "Dr. Teresa May",
    speciality: "gynaecology",
    years_of_experience: 17,
    gender: "Female",
    availability: "Thursday to Sunday 2pm to 10pm",
  },
];

const seedDoctors = () => Doctors.bulkCreate(doctordata);

module.exports = seedDoctors;
