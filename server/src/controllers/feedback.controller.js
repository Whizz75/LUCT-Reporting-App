const feedbackRepository = require('../repositories/feedback.repository');

class FeedbackController {
  async getByReport(req, res, next) {
    try {
      const feedbacks = await feedbackRepository.findByReport(req.params.reportId);
      res.json(feedbacks);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newFeedback = await feedbackRepository.create(req.body);
      res.status(201).json(newFeedback);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await feedbackRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new FeedbackController();
