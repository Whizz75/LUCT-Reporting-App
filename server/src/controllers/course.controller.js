const courseRepository = require('../repositories/course.repository');

class CourseController {
  async getAll(req, res, next) {
    try {
      const courses = await courseRepository.findAll();
      res.json(courses);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const course = await courseRepository.findById(req.params.id);
      if (!course) return res.status(404).json({ message: 'Course not found' });
      res.json(course);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newCourse = await courseRepository.create(req.body);
      res.status(201).json(newCourse);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedCourse = await courseRepository.update(req.params.id, req.body);
      res.json(updatedCourse);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await courseRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
