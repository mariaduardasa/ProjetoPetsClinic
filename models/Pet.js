const Sequelize = require('sequelize');
const db = require('../db/connection');
const Tutor = require('./Tutor')

const Pet = db.define('pet', {
    name: {
        type: Sequelize.STRING,
    },
    species: {
        type: Sequelize.STRING,
    },
    carry: {
        type: Sequelize.STRING,
    },
    weight: {
        type: Sequelize.INTEGER,
    },
    date_of_birth: {
        type: Sequelize.DATEONLY,
    },
    tutor_id: {
        type: Sequelize.INTEGER,
        references:{
            modelo: 'tutors',
            key: 'id',
        }
    }   
});
Pet.belongsTo(Tutor, {foreignKey: 'tutor_id'});

module.exports = Pet