module.exports = (sequelize, DataTypes) => {
  const Surgerie = sequelize.define('Surgerie', {
    surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Surgeries',
  });


  return Surgerie;
};