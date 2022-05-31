const User = require('./User');
const Doctors = require('./Doctors');
const Clients = require('./Clients');

Clients.hasMany(Doctors,{
    foreignKey: 'clients_id',
});

Doctors.belongsTo(Clients,{
    foreignKey: 'clients_id',
});

module.exports = {User, Doctors, Clients};