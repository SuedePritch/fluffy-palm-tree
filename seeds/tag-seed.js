const { Tag } = require('../models');

const tagData = [
  {
    tech_name: 'Javascript',
  },
  {
    tech_name: 'NodeJs',
  },
  {
    tech_name: 'SQL',
  },
  {
    tech_name: 'MongoDB',
  },
  {
    tech_name: 'Python',
  },
  {
    tech_name: 'Django',
  },
  {
    tech_name: 'Flask',
  },
  {
    tech_name: 'PHP',
  },
  {
    tech_name: 'Apache',
  },
  {
    tech_name: 'AWS',
  },
  {
    tech_name: 'Docker',
  },
  {
    tech_name: '.Net',
  },
  {
    tech_name: 'C++',
  },
  {
    tech_name: 'COBOL',
  },
  
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;