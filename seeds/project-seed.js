const { Project } = require('../models')

const projectData = [
    {
        "title": "Looking for someone to build me a working calculator",
        "projectdescription": "I'm looking for a working calculator app, it needs to have Addition, subtraction, multiplication, division, and allow them all to work in fractions included in the calculator.",
        "budget": 2000,
        "deadline": "July 21",
        "user_id": 1
    },
    {
        "title": "I'm in need of a redesign of my website",
        "projectdescription": "I have an old website from the early 2000s that needs to be modernized, while keeping the same color theme",
        "budget": 1500,
        "deadline": "July 30",
        "user_id": 2
    },
    {
        "title": "I need a calendar app",
        "projectdescription": "I need a calendar app that can display events coming up in the year, and can also display hourly events",
        "budget": 1600,
        "deadline": "July 31",
        "user_id": 3
    },
    {
        "title": "I'm looking for someone to build a website for my dealership",
        "projectdescription": "I'm looking for someone to build a website for my business, I'm a cars salesman, and I want images of the cars, if there new, or used, and the prices of the car to be displayed.",
        "budget": 2500,
        "deadline": "July 13",
        "user_id": 4
    },
];

const seedProjects = () => Project.bulkCreate(projectData);

module.exports = seedProjects;