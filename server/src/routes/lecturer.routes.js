const express = require('express');
const router = express.Router();
const lecturerController = require('../controllers/lecturer.controller');

router.get('/', lecturerController.getAll);
router.get('/:id', lecturerController.getById);
router.post('/', lecturerController.create);
router.put('/:id', lecturerController.update);
router.delete('/:id', lecturerController.delete);

module.exports = router;
