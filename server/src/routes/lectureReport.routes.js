const express = require('express');
const router = express.Router();
const lectureReportController = require('../controllers/lectureReport.controller');

router.get('/', lectureReportController.getAll);
router.get('/:id', lectureReportController.getById);
router.post('/', lectureReportController.create);
router.put('/:id', lectureReportController.update);
router.delete('/:id', lectureReportController.delete);

module.exports = router;
