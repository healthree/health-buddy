const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Clients extends Model {}

Clients.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        date_of_enrollment: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        symptoms: {
            type: DataType.STRING,
            allowNull:false,
        },
        medical_history: {
            type: DataType.STRING,
            allowNull: true,
        },
        doctors_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'doctors',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableNamee: true,
        modelName: 'clients',
    }
);

module.exports = Clients;