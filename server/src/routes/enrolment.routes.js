const express = require('express');
const router = express.Router();
const enrolmentController = require('../controllers/enrolment.controller');

router.get('/', enrolmentController.getAll);
router.get('/student/:studentId', enrolmentController.getByStudent);
router.post('/', enrolmentController.create);
router.delete('/:id', enrolmentController.delete);

module.exports = router;
