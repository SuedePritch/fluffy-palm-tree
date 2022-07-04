const { User } = require('../models')

const userData = [
    {
        "username": "Jimmy",
        "email": "james.edwa@gmail.com",
        "password": "password1234",
        "isDev":true
    },
    {
        "username": "mikkyD",
        "email": "mikeDonald@gmail.com",
        "password": "password1234",
        "isDev":true
    },
    {
        "username": "mikkyD123",
        "email": "mikeDonald123@gmail.com",
        "password": "password1234",
        "isDev":true
    },
    {
        "username": "SWrighter",
        "email": "SarahWhitman@gmail.com",
        "password": "password1234",
        "isDev":true
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;