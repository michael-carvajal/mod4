'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    name: {
      allowNull: false,
      type: DataTypes.STRING(150),
      unique: true
    },
    height: DataTypes.NUMERIC(4,2),
    weight: DataTypes.NUMERIC(5,2),
    evolves: DataTypes.BOOLEAN,
    rarity: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};
