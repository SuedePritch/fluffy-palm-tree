const { Post } = require('../models')

const postData = [
    {
    "user_id": 1,
    "name": "Robert Nicostratus",
    "job": "Fullstack",
    "price": 75,
    "description": "I am a full stack dev using the MERN and PERN stack",
    "profile": "http://jamespritchard.netlify.app",
    },
    {
    "user_id": 2,
    "name": "Phaedra Domna",
    "job": "Design",
    "price": 45,
    "description": "Professional Graphic Designer",
    "profile": "http://jamespritchard.netlify.app"
    },
    {
    "user_id": 3,
    "name": "Deodatus Rajeev",
    "job": "Front End",
    "price": 55,
    "description": "I can handle any Javascript Frontend",
    "profile": "http://jamespritchard.netlify.app"
    },
    {
    "user_id": 4,
    "name": "Manlio Krishna",
    "job": "Fullstack",
    "price": 65,
    "description": "I'm Manlio and i specialize in the LAMP stack",
    "profile": "http://jamespritchard.netlify.app"
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;