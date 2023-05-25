const {Joke} = require('./Joke');
const {sequelize, Op} = require('./db');

module.exports = {
    Joke,
    sequelize,
    Op
};
