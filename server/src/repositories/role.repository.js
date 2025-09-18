const db = require('../config/db');

class RoleRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Role');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Role WHERE role_id = $1', [id]);
    return result.rows[0];
  }

  async create({ roleName }) {
    const result = await db.query(
      'INSERT INTO Role (role_name) VALUES ($1) RETURNING *',
      [roleName]
    );
    return result.rows[0];
  }

  async update(id, { roleName }) {
    const result = await db.query(
      'UPDATE Role SET role_name = $1 WHERE role_id = $2 RETURNING *',
      [roleName, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Role WHERE role_id = $1', [id]);
    return { message: 'Role deleted successfully' };
  }
}

module.exports = new RoleRepository();
