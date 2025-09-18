const classRepository = require('../repositories/class.repository');

class ClassController {
  async getAll(req, res, next) {
    try {
      const classes = await classRepository.findAll();
      res.json(classes);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const _class = await classRepository.findById(req.params.id);
      if (!_class) return res.status(404).json({ message: 'Class not found' });
      res.json(_class);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newClass = await classRepository.create(req.body);
      res.status(201).json(newClass);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedClass = await classRepository.update(req.params.id, req.body);
      res.json(updatedClass);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await classRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ClassController();
