const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET || 'batatinha123';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateToken = ({ username }) => jwt.sign({ username }, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    throw Error;
  }

  try {
    const validate = await jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    throw Error;
  }
};
module.exports = {
  generateToken,
  authenticateToken,
};
