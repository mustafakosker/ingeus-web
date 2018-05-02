import { SAVE_USER_SUCCESS, SAVE_USER_ERROR } from '../../actions/user/userActions';

const initialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  password: '',
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_SUCCESS:
      return {
        ...initialState,
        ...action.data
      };
    case SAVE_USER_ERROR:
      return {
        ...state,
        errorMessage: action.error && action.error.message
      };
    default:
      return state;
  }
};
