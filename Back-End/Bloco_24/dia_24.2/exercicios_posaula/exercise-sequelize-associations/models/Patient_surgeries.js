module.exports = (sequelize, _DataTypes) => {
  const Patient_surgeries = sequelize.define('Patient_surgeries',
    {},
    { timestamps: false },
  );

  Patient_surgeries.associate = (models) => {
    models.Surgerie.belongsToMany(models.Patient, {
      as: 'patients',
      through: Patient_surgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
    models.Patient.belongsToMany(models.Surgerie, {
      as: 'surgeries',
      through: Patient_surgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
  };

  return Patient_surgeries;
};