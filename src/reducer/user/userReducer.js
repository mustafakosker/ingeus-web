import { SAVE_USER_SUCCESS } from '../../actions/user/userActions';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  password: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_SUCCESS:
      return {
        ...action.data
      };
    default:
      return state;
  }
};
