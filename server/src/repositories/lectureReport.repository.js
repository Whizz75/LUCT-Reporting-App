const db = require('../config/db');

class LectureReportRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM LectureReport');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM LectureReport WHERE report_id = $1', [id]);
    return result.rows[0];
  }

  async create({
    classId, week, lectureDate, topicTaught,
    learningOutcomes, recommendations,
    studentsPresent, totalRegistered
  }) {
    const result = await db.query(
      `INSERT INTO LectureReport 
      (class_id, week, lecture_date, topic_taught, learning_outcomes, recommendations, students_present, total_registered)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [classId, week, lectureDate, topicTaught, learningOutcomes, recommendations, studentsPresent, totalRegistered]
    );
    return result.rows[0];
  }

  async update(id, {
    week, lectureDate, topicTaught,
    learningOutcomes, recommendations,
    studentsPresent, totalRegistered
  }) {
    const result = await db.query(
      `UPDATE LectureReport
       SET week = $1, lecture_date = $2, topic_taught = $3,
           learning_outcomes = $4, recommendations = $5,
           students_present = $6, total_registered = $7
       WHERE report_id = $8 RETURNING *`,
      [week, lectureDate, topicTaught, learningOutcomes, recommendations, studentsPresent, totalRegistered, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM LectureReport WHERE report_id = $1', [id]);
    return { message: 'Lecture report deleted successfully' };
  }
}

module.exports = new LectureReportRepository();
