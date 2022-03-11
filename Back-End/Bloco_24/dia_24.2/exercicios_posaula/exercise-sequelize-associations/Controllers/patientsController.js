const { Patient, Plan, Surgerie } = require('../models');

const getAllPatientsPlans = (_req, res) =>
Patient.findAll({ include: { model: Plan, as: 'plan' }, attributes: { exclude: ['plan_id']} })
  .then((listOfPatients) => {
    if (!listOfPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  })
  .catch(() => {
    return res.status(500).json({ message: 'Algo deu errado' });
  });

const getAllPatientsSurgeries = (_req, res) =>
Patient.findAll({
  include: { model: Surgerie, as: 'surgeries', through: { attributes: [] } }
})
  .then((listOfPatients) => {
    if (!listOfPatients.length) {
      return res.status(404).send({ message: 'No patients found' });
    }
    return res.status(200).json(listOfPatients);
  })
  .catch(() => {
    return res.status(500).json({ message: 'Algo deu errado' });
  });

// const getPatientsAndSurgeriesNoDoctor = (_req, res) =>
// Patient.findAll({
//   include: {
//     model: Surgerie,
//     as: 'surgeries',
//     attributes: { exclude: ['doctor'] },
//     through: { attributes: [] }
//   }
// })
//   .then((listOfPatients) => {
//     if (listOfPatients === null) {
//       return res.status(404).send({ message: 'No patients found' });
//     }

//     return res.status(200).json(listOfPatients);
//   })
//   .catch(() => res.status(500).json({ message: 'Algo deu errado' }));

// const createPatients = (req, res) => {
//   const { fullname, plan_id } = req.body;
//   Patients.create({ fullname, plan_id })
//     .then((response) => res.status(200).json(response))
//     .catch(() => res.status(500).json({ message: 'Algo deu errado' }));
// };

module.exports = {
  getAllPatientsPlans,
  getAllPatientsSurgeries,
  // createPatients,
  // getPatientsAndSurgeriesNoDoctor,
};