const { authenticateToken } = require('../helpers/jwt');

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const payload = await authenticateToken(token);
    res.locals.payload = payload;
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  return next();
};

module.exports = authMiddleware;
