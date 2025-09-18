const db = require('../config/db');

class RatingRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Rating');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Rating WHERE rating_id = $1', [id]);
    return result.rows[0];
  }

  async create({ studentId, classId, ratingValue, comment }) {
    const result = await db.query(
      `INSERT INTO Rating (student_id, class_id, rating_value, comment)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [studentId, classId, ratingValue, comment]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Rating WHERE rating_id = $1', [id]);
    return { message: 'Rating deleted successfully' };
  }
}

module.exports = new RatingRepository();
