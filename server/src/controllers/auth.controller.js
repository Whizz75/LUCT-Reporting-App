const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

class AuthController {
  async register(req, res, next) {
    try {
      const { username, password, roleId, studentId, lecturerId } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await userRepository.create({ username, passwordHash, roleId, studentId, lecturerId });
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await userRepository.findByUsername(username);
      if (!user) return res.status(401).json({ message: 'Invalid credentials' });

      const match = await bcrypt.compare(password, user.password_hash);
      if (!match) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign(
        { id: user.user_id, role: user.role_name },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, user });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
