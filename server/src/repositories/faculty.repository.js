const db = require('../config/db');

class FacultyRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Faculty');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Faculty WHERE faculty_id = $1', [id]);
    return result.rows[0];
  }

  async create({ facultyName }) {
    const result = await db.query(
      'INSERT INTO Faculty (faculty_name) VALUES ($1) RETURNING *',
      [facultyName]
    );
    return result.rows[0];
  }

  async update(id, { facultyName }) {
    const result = await db.query(
      'UPDATE Faculty SET faculty_name = $1 WHERE faculty_id = $2 RETURNING *',
      [facultyName, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Faculty WHERE faculty_id = $1', [id]);
    return { message: 'Faculty deleted successfully' };
  }
}

module.exports = new FacultyRepository();
