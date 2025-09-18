const db = require('../config/db');

class VenueRepository {
  async findAll() {
    const result = await db.query('SELECT * FROM Venue');
    return result.rows;
  }

  async findById(id) {
    const result = await db.query('SELECT * FROM Venue WHERE venue_id = $1', [id]);
    return result.rows[0];
  }

  async create({ venueName, capacity }) {
    const result = await db.query(
      'INSERT INTO Venue (venue_name, capacity) VALUES ($1, $2) RETURNING *',
      [venueName, capacity]
    );
    return result.rows[0];
  }

  async update(id, { venueName, capacity }) {
    const result = await db.query(
      'UPDATE Venue SET venue_name = $1, capacity = $2 WHERE venue_id = $3 RETURNING *',
      [venueName, capacity, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await db.query('DELETE FROM Venue WHERE venue_id = $1', [id]);
    return { message: 'Venue deleted successfully' };
  }
}

module.exports = new VenueRepository();
