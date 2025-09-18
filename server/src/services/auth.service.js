const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepo = require('../repositories/user.repository');

exports.register = async ({ name, email, password, role }) => {
  const existing = await userRepo.findByEmail(email);
  if (existing) throw new Error('User already exists');

  const hashed = await bcrypt.hash(password, 10);
  const newUser = await userRepo.create({ name, email, password: hashed, role });
  return { id: newUser.id, email: newUser.email, role: newUser.role };
};

exports.login = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new Error('Invalid credentials');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error('Invalid credentials');

  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};
