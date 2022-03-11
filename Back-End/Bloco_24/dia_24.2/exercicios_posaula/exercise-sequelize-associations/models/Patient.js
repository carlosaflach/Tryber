'use strict'

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    plan_id: {type: DataTypes.DOUBLE, foreignKey: true},
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Patients',
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan, 
      { foreignKey: 'plan_id', as: 'plan'})
  };

  return Patient;
};