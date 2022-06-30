const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class TechTag extends Model {}

TechTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tech_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'tech',
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tech_tag',
  }
);

module.exports = TechTag;