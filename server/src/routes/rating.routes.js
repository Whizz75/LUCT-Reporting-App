const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating.controller');

router.get('/', ratingController.getAll);
router.get('/:id', ratingController.getById);
router.post('/', ratingController.create);
router.delete('/:id', ratingController.delete);

module.exports = router;
