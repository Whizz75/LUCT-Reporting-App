const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');

router.get('/report/:reportId', feedbackController.getByReport);
router.post('/', feedbackController.create);
router.delete('/:id', feedbackController.delete);

module.exports = router;
