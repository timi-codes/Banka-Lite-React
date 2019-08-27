import actionTypes from '@actions/actionTypes';

const { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED, GET_USER_FROM_TOKEN } = actionTypes;

const initialState = {
  isPending: false,
  isAuthenticated: false,
  user: null,
  error: null
};

const auth = (state = initialState, {type, payload}) => {
  switch(type){
    case AUTH_PENDING:
      return Object.assign({},state, {
        isPending: payload.isPending
      })
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        isPending: payload.isPending,
        isAuthenticated: payload.isAuthenticated,
        user: payload.user
      })
    case GET_USER_FROM_TOKEN:
      return Object.assign({}, state, {
        user: payload.user
      });
    case AUTH_FAILED:
      return Object.assign({}, state, {
        isPending: payload.isPending,
        error: payload.error,
      })
    default :
      return state
  }
};

export default auth;
