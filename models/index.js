const User = require('./User');
const Doctors = require('./Doctors');
const Clients = require('./Clients');

Doctors.hasMany(Clients,{
    foreignKey: 'doctors_id',
});

Clients.belongsTo(Doctors,{
    foreignKey: 'doctors_id',
});

module.exports = {User, Doctors, Clients};