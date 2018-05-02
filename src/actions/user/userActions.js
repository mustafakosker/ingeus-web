import axios from 'axios';
import moment from 'moment';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 3000
});

export const saveUser = user => (dispatch) => {
  const data = {
    ...user,
    dateOfBirth: moment(user.dateOfBirth).format('DD/MM/YYYY')
  };

  return api.post('/users', data).then(() => console.log('success'));
};
