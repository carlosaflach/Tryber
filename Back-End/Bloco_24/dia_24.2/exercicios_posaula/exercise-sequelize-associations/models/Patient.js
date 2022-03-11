'use strict'

module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    plan_id: DataTypes.DOUBLE,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'Patients',
  });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan, 
      { foreignKey: 'plan_id', as: 'plans'})
  };

  return Patient;
};