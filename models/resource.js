const { DataTypes, Model, Op } = require('sequelize');

class Resource extends Model {}

function init_model(sequelize) {

  Resource.init({
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Resource'
  });

}

module.exports = {Resource, init_model};