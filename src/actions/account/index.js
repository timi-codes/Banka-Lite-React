import actionTypes from '@actions/actionTypes';
import client from '@config/client';
import { getErrorResponse, getSuccessResponse } from '@utils/getResponse';
import * as Toastr from 'toastr';
import { decodeToken } from '@utils';

const { FETCH_ACCOUNT_PENDING, FETCH_ACCOUNT_SUCCESS, ACCOUNT_FAILED, FETCH_TRANSACTION_SUCCESS, CREATE_ACCOUNT } = actionTypes;

export const fetchAccountPending = ()=>({
  type: FETCH_ACCOUNT_PENDING,
  payload: {
    isPending: true,
  }
});

export const fetchAccountSuccess = (accounts)=>{
  return {
    type: FETCH_ACCOUNT_SUCCESS,
    payload: {
      isPending: false,
      accounts,
    }
  }
}

export const createNewAccount = (account)=>{
  return {
    type: CREATE_ACCOUNT,
    payload: {
      isPending: false,
      ...account
    }
  }
}

export const fetchTransactionSuccess = (transactions)=>{
  return {
    type: FETCH_TRANSACTION_SUCCESS,
    payload: {
      isPending: false,
      transactions,
    }
  }
}

export const fetchAccountFailed = () => {
  return {
    type: ACCOUNT_FAILED,
    payload: {
      isPending: false,
    }
  }
}

export const fetchAccounts = (history)=> {
  return async dispatch => {
    dispatch(fetchAccountPending());
    try {

      const { email } = decodeToken(history);
      const token = localStorage.getItem('token');
      const response = await client().get(`/user/${email}/accounts`, { headers: { "token": `Bearer ${token}`}});
      const {data} = getSuccessResponse(response);
      dispatch(fetchAccountSuccess(data));
    } catch(error){
      const message = getErrorResponse(error);
      Toastr.error(message);
      dispatch(fetchAccountFailed());

    }
  }
}

export const createAccount = (type)=> {
  return async dispatch => {

    dispatch(fetchAccountPending());
    try {
      const token = localStorage.getItem('token');
      const response = await client().post(`/accounts`, {
        type,
        balance: "0.00"
      },{ headers: { "token": `Bearer ${token}`}});

      const { data } = getSuccessResponse(response);
      dispatch(createNewAccount(data));
      Toastr.success("Account created successfully");
    } catch(error){
      const message = getErrorResponse(error);
      Toastr.error(message);
      dispatch(fetchAccountFailed());
    }
  }
}