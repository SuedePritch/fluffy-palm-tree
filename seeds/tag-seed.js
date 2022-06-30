const { Tag } = require('../models');

const tagData = [
  {
    tech_name: 'rock music',
  },
  {
    tech_name: 'pop music',
  },
  {
    tech_name: 'blue',
  },
  {
    tech_name: 'red',
  },
  {
    tech_name: 'green',
  },
  {
    tech_name: 'white',
  },
  {
    tech_name: 'gold',
  },
  {
    tech_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;