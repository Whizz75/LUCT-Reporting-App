const db = require('../config/db');

class StudentRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Student');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Student WHERE student_id = $1', [id]);
    return result.rows[0];
  }

  async create({ studentName, email, facultyId }) {
    const result = await db.query(
      `INSERT INTO Student (student_name, email, faculty_id)
       VALUES ($1, $2, $3) RETURNING *`,
      [studentName, email, facultyId]
    );
    return result.rows[0];
  }

  async update(id, { studentName, email, facultyId }) {
    const result = await db.query(
      `UPDATE Student SET student_name = $1, email = $2, faculty_id = $3
       WHERE student_id = $4 RETURNING *`,
      [studentName, email, facultyId, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Student WHERE student_id = $1', [id]);
    return { message: 'Student deleted successfully' };
  }
}

module.exports = new StudentRepository();
