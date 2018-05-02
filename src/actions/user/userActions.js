import axios from 'axios';
import moment from 'moment';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 3000
});

export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
const saveUserSuccess = (data) => ({
  data,
  SAVE_USER_SUCCESS
});

export const saveUser = user => (dispatch) => {
  const data = {
    ...user,
    dateOfBirth: moment(user.dateOfBirth).format('DD/MM/YYYY')
  };

  return api.post('/users', data)
    .then((response) => dispatch(saveUserSuccess(response)))
    .catch(error => console.log(error));
};
