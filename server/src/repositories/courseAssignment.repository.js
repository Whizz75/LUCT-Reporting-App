const db = require('../config/db');

class CourseAssignmentRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM CourseAssignment');
    return result.rows;
  }

  async findByLecturer(lecturerId) {
    const result = await db.query('SELECT * FROM CourseAssignment WHERE lecturer_id = $1', [lecturerId]);
    return result.rows;
  }

  async create({ courseId, lecturerId }) {
    const result = await db.query(
      `INSERT INTO CourseAssignment (course_id, lecturer_id)
       VALUES ($1, $2) RETURNING *`,
      [courseId, lecturerId]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM CourseAssignment WHERE assignment_id = $1', [id]);
    return { message: 'Course assignment deleted successfully' };
  }
}

module.exports = new CourseAssignmentRepository();
