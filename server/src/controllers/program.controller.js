const programRepository = require('../repositories/program.repository');

class ProgramController {
  async getAll(req, res, next) {
    try {
      const programs = await programRepository.findAll();
      res.json(programs);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const program = await programRepository.findById(req.params.id);
      if (!program) return res.status(404).json({ message: 'Program not found' });
      res.json(program);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newProgram = await programRepository.create(req.body);
      res.status(201).json(newProgram);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedProgram = await programRepository.update(req.params.id, req.body);
      res.json(updatedProgram);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await programRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProgramController();
