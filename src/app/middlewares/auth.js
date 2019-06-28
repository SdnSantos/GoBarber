import jwt from 'jsonwebtoken';
// transforma uma callback em uma promisse(async e await)
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  // dividir a string no espaço
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  return next();
};
