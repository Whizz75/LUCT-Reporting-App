const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venue.controller');

router.get('/', venueController.getAll);
router.get('/:id', venueController.getById);
router.post('/', venueController.create);
router.put('/:id', venueController.update);
router.delete('/:id', venueController.delete);

module.exports = router;
