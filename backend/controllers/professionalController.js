const Professional = require('../models/Professional');

const addProfessional = async (req, res) => {
  const { name, specialty } = req.body;

  try {
    const professional = await Professional.create({ name, specialty });
    res.status(201).json(professional);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getProfessionals = async (req, res) => {
  try {
    const professionals = await Professional.find();
    res.json(professionals);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addProfessional, getProfessionals };