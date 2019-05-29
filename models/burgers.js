module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
      freezeTableName: true
    });
  return Burgers;
}