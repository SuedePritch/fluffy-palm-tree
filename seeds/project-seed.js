const { Project } = require('../models')

const projectData = [
    {
        "title": "testing",
        "description": "This is a test!",
        "budget": 25,
        "deadline": "the date goes here"
    },
    {
        "title": "testingTwo",
        "description": "This is a test! wow",
        "budget": 2555,
        "deadline": "the date goes here again"
    },
    {
        "title": "testingThree",
        "description": "This is a test! epic",
        "budget": 255,
        "deadline": "the date goes here again again"
    },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;