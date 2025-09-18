const db = require('../config/db');

class FeedbackRepository {
  async findByReport(reportId) {
    const result = await db.query('SELECT * FROM Feedback WHERE report_id = $1', [reportId]);
    return result.rows;
  }

  async create({ reportId, prlId, feedbackText }) {
    const result = await db.query(
      `INSERT INTO Feedback (report_id, prl_id, feedback_text)
       VALUES ($1, $2, $3) RETURNING *`,
      [reportId, prlId, feedbackText]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Feedback WHERE feedback_id = $1', [id]);
    return { message: 'Feedback deleted successfully' };
  }
}

module.exports = new FeedbackRepository();
