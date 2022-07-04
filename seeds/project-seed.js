const { Project } = require('../models')

const projectData = [
    {
        "title": "testing",
        "description": "This is a test!",
        "budget": 25,
        "deadline": "the date goes here",
        "user_id": 1
    },
    {
        "title": "testingTwo",
        "description": "This is a test! wow",
        "budget": 2555,
        "deadline": "the date goes here again",
        "user_id": 2
    },
    {
        "title": "testingThree",
        "description": "This is a test! epic",
        "budget": 255,
        "deadline": "the date goes here again again",
        "user_id": 3
    },
    {
        "title": "testingFour",
        "description": "This is a test! cool",
        "budget": 25555,
        "deadline": "the date goes here again again",
        "user_id": 4
    },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;