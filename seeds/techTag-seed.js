const { TechTag } = require('../models');

const techTagData = [
  //Post 1- fullstack
  {
    tech_id: 1,
    tag_id: 16,
  },
  {
    tech_id: 1,
    tag_id: 24,
  },
  {
    tech_id: 1,
    tag_id: 7,
  },
  {
    tech_id: 1,
    tag_id: 25,
  },
  {
    tech_id: 1,
    tag_id: 23,
  },
  {
    tech_id: 1,
    tag_id: 29,
  },


  //Post 2 - designer
  {
    tech_id: 2,
    tag_id: 5,
  },
  {
    tech_id: 2,
    tag_id: 8,
  },
  {
    tech_id: 2,
    tag_id: 14,
  },
  {
    tech_id: 2,
    tag_id: 41,
  },

  //Post 3 - Frontend
  {
    tech_id: 3,
    tag_id: 5,
  },
  {
    tech_id: 3,
    tag_id: 8,
  },
  {
    tech_id: 3,
    tag_id: 13,
  },
  {
    tech_id: 3,
    tag_id: 16,
  },
  {
    tech_id: 3,
    tag_id: 17,
  },
  {
    tech_id: 3,
    tag_id: 29,
  },

  //Post 4 - FullStack
  {
    tech_id: 4,
    tag_id: 1,
  },
  {
    tech_id: 4,
    tag_id: 20,
  },
  {
    tech_id: 4,
    tag_id: 26,
  },
  {
    tech_id: 4,
    tag_id: 25,
  },
];

const seedTechTags = () => TechTag.bulkCreate(techTagData);

module.exports = seedTechTags;