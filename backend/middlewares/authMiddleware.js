// protect all you url
import jwt from 'jsonwebtoken';
import { responseReturn } from '../utiles/responseReturn.js';

export async function authMiddleware(req, res, next) {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    responseReturn(res, 401, {
      status: 'error',
      message: 'Unauthorized: No token',
    });
  } else {
    try {
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
      req.id = decoded.id;
      req.role = decoded.role;

      next();
    } catch (error) {
      responseReturn(res, 401, {
        status: 'error',
        message: 'Unauthorized: Invalid token',
      });
    }
  }
}
