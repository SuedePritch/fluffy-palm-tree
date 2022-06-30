const { TechTag } = require('../models');

const techTagData = [
  {
    tech_id: 1,
    tag_id: 1,
  },
  {
    tech_id: 1,
    tag_id: 2,
  },
  {
    tech_id: 1,
    tag_id: 3,
  },
  {
    tech_id: 2,
    tag_id: 4,
  },
];

const seedTechTags = () => TechTag.bulkCreate(techTagData);

module.exports = seedTechTags;