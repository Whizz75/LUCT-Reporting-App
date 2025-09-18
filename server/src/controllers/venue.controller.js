const venueRepository = require('../repositories/venue.repository');

class VenueController {
  async getAll(req, res, next) {
    try {
      const venues = await venueRepository.findAll();
      res.json(venues);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const venue = await venueRepository.findById(req.params.id);
      if (!venue) return res.status(404).json({ message: 'Venue not found' });
      res.json(venue);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newVenue = await venueRepository.create(req.body);
      res.status(201).json(newVenue);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedVenue = await venueRepository.update(req.params.id, req.body);
      res.json(updatedVenue);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await venueRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new VenueController();
