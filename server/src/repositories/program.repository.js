const db = require('../config/db');

class ProgramRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Program');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Program WHERE program_id = $1', [id]);
    return result.rows[0];
  }

  async create({ programName, facultyId }) {
    const result = await db.query(
      'INSERT INTO Program (program_name, faculty_id) VALUES ($1, $2) RETURNING *',
      [programName, facultyId]
    );
    return result.rows[0];
  }

  async update(id, { programName, facultyId }) {
    const result = await db.query(
      'UPDATE Program SET program_name = $1, faculty_id = $2 WHERE program_id = $3 RETURNING *',
      [programName, facultyId, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Program WHERE program_id = $1', [id]);
    return { message: 'Program deleted successfully' };
  }
}

module.exports = new ProgramRepository();
