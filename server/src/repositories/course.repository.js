const db = require('../config/db');

class CourseRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Course');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Course WHERE course_id = $1', [id]);
    return result.rows[0];
  }

  async create({ courseCode, courseName, facultyId }) {
    const result = await db.query(
      `INSERT INTO Course (course_code, course_name, faculty_id)
       VALUES ($1, $2, $3) RETURNING *`,
      [courseCode, courseName, facultyId]
    );
    return result.rows[0];
  }

  async update(id, { courseCode, courseName, facultyId }) {
    const result = await db.query(
      `UPDATE Course SET course_code = $1, course_name = $2, faculty_id = $3
       WHERE course_id = $4 RETURNING *`,
      [courseCode, courseName, facultyId, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Course WHERE course_id = $1', [id]);
    return { message: 'Course deleted successfully' };
  }
}

module.exports = new CourseRepository();
