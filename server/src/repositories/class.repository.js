const db = require('../config/db');

class ClassRepository {
  async create({ name, courseId, lecturerId, venue, schedule }) {
    const result = await db.query(
      `INSERT INTO classes (name, course_id, lecturer_id, venue, schedule)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, courseId, lecturerId, venue, schedule]
    );
    return result.rows[0];
  }

  async findByLecturer(lecturerId) {
    const result = await db.query('SELECT * FROM classes WHERE lecturer_id = $1', [lecturerId]);
    return result.rows;
  }
}

module.exports = new ClassRepository();
