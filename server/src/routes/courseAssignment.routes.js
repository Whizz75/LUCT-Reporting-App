const express = require('express');
const router = express.Router();
const courseAssignmentController = require('../controllers/courseAssignment.controller');

router.get('/', courseAssignmentController.getAll);
router.get('/lecturer/:lecturerId', courseAssignmentController.getByLecturer);
router.post('/', courseAssignmentController.create);
router.delete('/:id', courseAssignmentController.delete);

module.exports = router;
