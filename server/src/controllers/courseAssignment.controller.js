const courseAssignmentRepository = require('../repositories/courseAssignment.repository');

class CourseAssignmentController {
  async getAll(req, res, next) {
    try {
      const assignments = await courseAssignmentRepository.findAll();
      res.json(assignments);
    } catch (err) {
      next(err);
    }
  }

  async getByLecturer(req, res, next) {
    try {
      const assignments = await courseAssignmentRepository.findByLecturer(req.params.lecturerId);
      res.json(assignments);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newAssignment = await courseAssignmentRepository.create(req.body);
      res.status(201).json(newAssignment);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await courseAssignmentRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseAssignmentController();
