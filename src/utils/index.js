import jwtDecode from 'jwt-decode';

export const saveToLocalStorage = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  }
};

export const decodeToken = (history) => {
  const token = localStorage.getItem('token');
  if (token) {
    const { exp, iat, ...userData } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
      return userData;
    }
    return history && history.push('/');
  }
  return history && history.push('/');
};