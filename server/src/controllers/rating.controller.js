const ratingRepository = require('../repositories/rating.repository');

class RatingController {
  async getAll(req, res, next) {
    try {
      const ratings = await ratingRepository.findAll();
      res.json(ratings);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const rating = await ratingRepository.findById(req.params.id);
      if (!rating) return res.status(404).json({ message: 'Rating not found' });
      res.json(rating);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newRating = await ratingRepository.create(req.body);
      res.status(201).json(newRating);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await ratingRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RatingController();
