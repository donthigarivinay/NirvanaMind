const Resource = require('../models/Resource');

const addResource = async (title, type, link) => {
  const resource = await Resource.create({ title, type, link });
  return resource;
};

const getResources = async () => {
  const resources = await Resource.find();
  return resources;
};

module.exports = { addResource, getResources };