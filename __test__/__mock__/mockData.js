import jwt from 'jsonwebtoken';

const secret = 'princewill';

export const userToken = `Bearer ${jwt.sign(
  {
    email: "sholaadeola@gmail.com",
    id: 4,
    isAdmin: false,
    type: "client",
  },
  secret,
  { expiresIn: '1 hour' }
)}`;

export const expiredToken = `Bearer ${jwt.sign(
  {
    email: "sholaadeola@gmail.com",
    id: 4,
    isAdmin: false,
    type: "client",
  },
  secret,
  { expiresIn: -1 }
)}`;

export default {
  authResponse: {
    data: {
      email: "sholaadeola@gmail.com",
      id: 4,
      isAdmin: false,
      type: "client",
      token: userToken
    }
  }
};
