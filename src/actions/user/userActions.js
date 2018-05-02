import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 3000
});

export const saveUser = user => (dispatch) => {
  console.log(user);

  return api.post('/users', user).then(() => console.log('success'));
};
