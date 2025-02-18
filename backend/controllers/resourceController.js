const Resource = require('../models/Resource');

const addResource = async (req, res) => {
  const { title, type, link } = req.body;

  try {
    const resource = await Resource.create({ title, type, link });
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { addResource, getResources };