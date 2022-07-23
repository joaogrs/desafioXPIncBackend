const { authenticateToken } = require('../helpers/jwt');

const authMiddleware = async (req, res, next) => {
  let token = req.headers.authorization;
  if (token.includes('Bearer')) token = token.slice(7, token.length);

  try {
    const payload = await authenticateToken(token);
    res.locals.payload = payload;
  } catch (e) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  return next();
};

module.exports = authMiddleware;
