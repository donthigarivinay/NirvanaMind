const express = require('express');
const { addResource, getResources } = require('../controllers/resourceController');

const router = express.Router();

router.post('/', addResource);
router.get('/', getResources);

module.exports = router;