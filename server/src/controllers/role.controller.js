const roleRepository = require('../repositories/role.repository');

class RoleController {
  async getAll(req, res, next) {
    try {
      const roles = await roleRepository.findAll();
      res.json(roles);
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const role = await roleRepository.findById(req.params.id);
      if (!role) return res.status(404).json({ message: 'Role not found' });
      res.json(role);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const newRole = await roleRepository.create(req.body);
      res.status(201).json(newRole);
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const updatedRole = await roleRepository.update(req.params.id, req.body);
      res.json(updatedRole);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const result = await roleRepository.delete(req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new RoleController();
