import { combineReducers } from 'redux';
import auth from '@reducers/auth';
import account from '@reducers/account';

export default combineReducers({
  auth,
  account
});