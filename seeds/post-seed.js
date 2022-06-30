const { Post } = require('../models')

const postData = [
    {
    "user_id": 1,
    "name": "Robert Nicostratus",
    "job": "fullstack",
    "tech": "React Js",
    "price": 75,
    "description": "I am the first person, and I do all parts of code."
    },
    {
    "user_id": 2,
    "name": "Phaedra Domna",
    "job": "design",
    "tech": "CSS",
    "price": 45,
    "description": "I am the second person, and I do design."
    },
    {
        "user_id": 3,
        "name": "Deodatus Rajeev",
        "job": "Front End",
        "tech": "Vue",
        "price": 55,
        "description": "I am the third person, and I do front end jobs."
    },
    {
        "user_id": 4,
        "name": "Manlio Krishna",
        "job": "Back End",
        "tech": "Node Js",
        "price": 65,
        "description": "I am the forth person, and I do back end jobs."
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;