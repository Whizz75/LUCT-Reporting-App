const studentRepository = require('../repositories/student.repository');

class StudentController {
  async getAll(req, res, next) {
    try {
      const students = await studentRepository.findAll();
      res.json(students);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const student = await studentRepository.findById(req.params.id);
      if (!student) return res.status(404).json({ message: 'Student not found' });
      res.json(student);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newStudent = await studentRepository.create(req.body);
      res.status(201).json(newStudent);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedStudent = await studentRepository.update(req.params.id, req.body);
      res.json(updatedStudent);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await studentRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new StudentController();
