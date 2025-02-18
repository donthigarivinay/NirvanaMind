const Professional = require('../models/Professional');

const addProfessional = async (name, specialty) => {
  const professional = await Professional.create({ name, specialty });
  return professional;
};

const getProfessionals = async () => {
  const professionals = await Professional.find();
  return professionals;
};

module.exports = { addProfessional, getProfessionals };