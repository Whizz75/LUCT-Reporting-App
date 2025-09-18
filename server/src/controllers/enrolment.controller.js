const enrolmentRepository = require('../repositories/enrolment.repository');

class EnrolmentController {
  async getAll(req, res, next) {
    try {
      const enrolments = await enrolmentRepository.findAll();
      res.json(enrolments);
    } catch (err) {
      next(err);
    }
  }

  async getByStudent(req, res, next) {
    try {
      const enrolments = await enrolmentRepository.findByStudent(req.params.studentId);
      res.json(enrolments);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newEnrolment = await enrolmentRepository.create(req.body);
      res.status(201).json(newEnrolment);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await enrolmentRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new EnrolmentController();
