import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import { reducer as reduxFormReducer } from 'redux-form'

const rootReducer = combineReducers({
  user: userReducer,
  form: reduxFormReducer
});

export default rootReducer;
