const facultyRepository = require('../repositories/faculty.repository');

class FacultyController {
  async getAll(req, res, next) {
    try {
      const faculties = await facultyRepository.findAll();
      res.json(faculties);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const faculty = await facultyRepository.findById(req.params.id);
      if (!faculty) return res.status(404).json({ message: 'Faculty not found' });
      res.json(faculty);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newFaculty = await facultyRepository.create(req.body);
      res.status(201).json(newFaculty);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedFaculty = await facultyRepository.update(req.params.id, req.body);
      res.json(updatedFaculty);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await facultyRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new FacultyController();
