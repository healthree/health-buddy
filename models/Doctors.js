const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Doctors extends Model {}

Doctors.init(
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
        years_of_experience: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        speciality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availability: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        note: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableNamee: true,
        modelName: 'doctors',
    }
);

module.exports = Doctors;