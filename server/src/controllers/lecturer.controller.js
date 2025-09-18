const lecturerRepository = require('../repositories/lecturer.repository');

class LecturerController {
  async getAll(req, res, next) {
    try {
      const lecturers = await lecturerRepository.findAll();
      res.json(lecturers);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const lecturer = await lecturerRepository.findById(req.params.id);
      if (!lecturer) return res.status(404).json({ message: 'Lecturer not found' });
      res.json(lecturer);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newLecturer = await lecturerRepository.create(req.body);
      res.status(201).json(newLecturer);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedLecturer = await lecturerRepository.update(req.params.id, req.body);
      res.json(updatedLecturer);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await lecturerRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new LecturerController();
