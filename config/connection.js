// import the sequalize constructor from the library
const sequalize = require('sequelize');

require('dotenv').config();

// create connecttion to our database, pass in your mySQL information for username and password
const sequalize = new Sequalize('just_tech_news_db', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequalize;
