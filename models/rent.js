'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
            //La parte belongsTo (pertenece a) S I E M P R E se anota en la tabla intermedia, que en este caso es esta misma, SALE.
            Rent.belongsTo(models.User, {
              //userId es la clave importada en este caso
              foreignKey: 'userId'
            });

                  //La parte belongsTo (pertenece a) S I E M P R E se anota en la tabla intermedia, que en este caso es esta misma, SALE.
            Rent.belongsTo(models.Film, {
              //userId es la clave importada en este caso
              foreignKey: 'filmId'
      });
    }
  }
  Rent.init({
    rent_date: DataTypes.INTEGER,
    return_date: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rent',
  });
  return Rent;
};