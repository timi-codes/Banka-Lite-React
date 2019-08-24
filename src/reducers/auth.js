import actionTypes from '@actions/actionTypes';

const { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED } = actionTypes;

const initialState = {
  isPending: false,
  isAuthenticated: false,
  user: null,
  error: null
};

const types = [AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED];
const auth = (state = initialState, {type, payload}) => {
  return types.includes(type) ? Object.assign({}, state, ...payload) : state;
};

export default auth;
