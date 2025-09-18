const db = require('../config/db');

class ReportRepository {
  async create(report) {
    const {
      faculty, className, week, date, courseName, courseCode, lecturerName,
      studentsPresent, totalRegistered, venue, scheduledTime, topic, outcomes, recommendations
    } = report;

    const result = await db.query(
      `INSERT INTO reports 
      (faculty, class_name, week, date, course_name, course_code, lecturer_name, 
      students_present, total_registered, venue, scheduled_time, topic, outcomes, recommendations)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`,
      [faculty, className, week, date, courseName, courseCode, lecturerName,
        studentsPresent, totalRegistered, venue, scheduledTime, topic, outcomes, recommendations]
    );

    return result.rows[0];
  }

  async findByClass(className) {
    const result = await db.query('SELECT * FROM reports WHERE class_name = $1', [className]);
    return result.rows;
  }
}

module.exports = new ReportRepository();
