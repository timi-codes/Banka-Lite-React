import axios from 'axios';

export default () => {
  const BASE_URL = 'https://banka-timi.herokuapp.com/api/v1';
  return axios.create({ baseURL: BASE_URL });
};