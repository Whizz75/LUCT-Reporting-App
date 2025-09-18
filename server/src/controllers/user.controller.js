const userRepository = require('../repositories/user.repository');

class UserController {
  async getAll(req, res, next) {
    try {
      const users = await userRepository.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const user = await userRepository.findById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newUser = await userRepository.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedUser = await userRepository.update(req.params.id, req.body);
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await userRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
