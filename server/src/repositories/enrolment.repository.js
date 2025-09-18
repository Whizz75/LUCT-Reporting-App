const db = require('../config/db');

class EnrolmentRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Enrollment');
    return result.rows;
  }

  async findByStudent(studentId) {
    const result = await db.query('SELECT * FROM Enrollment WHERE student_id = $1', [studentId]);
    return result.rows;
  }

  async create({ studentId, courseId }) {
    const result = await db.query(
      `INSERT INTO Enrollment (student_id, course_id)
       VALUES ($1, $2) RETURNING *`,
      [studentId, courseId]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Enrollment WHERE enrollment_id = $1', [id]);
    return { message: 'Enrollment deleted successfully' };
  }
}

module.exports = new EnrolmentRepository();
