import { verifyToken } from "../config/jwt.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // attach user info (id, role, etc.)
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
