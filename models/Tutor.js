const Sequelize = require('sequelize');
const db = require('../db/connection');


const Tutor = db.define('tutor', {
    name: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.INTEGER,
    },
    email: {
        type: Sequelize.STRING,
    },
    date_of_birth: {
        type: Sequelize.STRING,
    },
    zip_code: {
        type: Sequelize.INTEGER,
    }     
});

module.exports = Tutor