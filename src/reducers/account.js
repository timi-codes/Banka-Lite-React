import actionTypes from '@actions/actionTypes';

const { FETCH_ACCOUNT_PENDING, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILED, FETCH_TRANSACTION_SUCCESS } = actionTypes;

const initialState = {
  isPending: false,
  accounts: [],
  transactions: [],
  error: null
};

const types = [FETCH_ACCOUNT_PENDING, FETCH_ACCOUNT_SUCCESS, FETCH_ACCOUNT_FAILED, FETCH_TRANSACTION_SUCCESS];
const account = (state = initialState, {type, payload}) => {
  return types.includes(type) ? {...state, ...payload} : state;
};

export default account;
