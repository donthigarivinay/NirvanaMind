const express = require('express');
const { addProfessional, getProfessionals } = require('../controllers/professionalController');

const router = express.Router();

router.post('/', addProfessional);
router.get('/', getProfessionals);

module.exports = router;