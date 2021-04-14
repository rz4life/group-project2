'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.business.belongsTo(models.type)
      models.business.hasMany(models.review)
      models.business.belongsTo(models.user)
    }
  };
  business.init({
    name: DataTypes.TEXT,
    address: DataTypes.TEXT,
    businessType: DataTypes.TEXT,
    description: DataTypes.TEXT,
    typeId:DataTypes.INTEGER,
    userId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'business',
  });
  return business;
};