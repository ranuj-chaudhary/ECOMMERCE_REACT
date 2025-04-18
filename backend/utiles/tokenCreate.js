import jwt from 'jsonwebtoken';
export async function createToken(data) {
  const token = jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  return token;
}
