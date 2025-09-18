const db = require('../config/db');

class LecturerRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Lecturer');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Lecturer WHERE lecturer_id = $1', [id]);
    return result.rows[0];
  }

  async create({ lecturerName, email, facultyId }) {
    const result = await db.query(
      `INSERT INTO Lecturer (lecturer_name, email, faculty_id)
       VALUES ($1, $2, $3) RETURNING *`,
      [lecturerName, email, facultyId]
    );
    return result.rows[0];
  }

  async update(id, { lecturerName, email, facultyId }) {
    const result = await db.query(
      `UPDATE Lecturer SET lecturer_name = $1, email = $2, faculty_id = $3
       WHERE lecturer_id = $4 RETURNING *`,
      [lecturerName, email, facultyId, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Lecturer WHERE lecturer_id = $1', [id]);
    return { message: 'Lecturer deleted successfully' };
  }
}

module.exports = new LecturerRepository();
