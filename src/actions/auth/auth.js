import actionTypes from '@actions/actionTypes';
import client from '@config/client';
import { getErrorResponse, getSuccessResponse } from '@utils/getResponse';
import { saveToLocalStorage, decodeToken } from '@utils';
import * as Toastr from 'toastr';

const { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED } = actionTypes;

export const authPending = ()=>({
  type: AUTH_PENDING,
  payload: {
    isPending: true,
  }
});

export const authSuccess = (user)=>{
  return {
    type: AUTH_SUCCESS,
    payload: {
      isPending: false,
      isAuthenticated: true,
      user,
    }
  }
}

export const authFailure = (error)=>{
  return {
    type: AUTH_FAILED,
    payload: {
      isPending: false,
      error,
    }
  }
}


export const login = (data, history)=> async dispatch => {
  const {type, email, password} = data;
  dispatch(authPending());
  try {
    const response = await client().post('/auth/login', {
      email,
      password
    })
    const {data:{ token }} = getSuccessResponse(response);

    saveToLocalStorage(token);
    const user = decodeToken({ history });

    Toastr.success('Login was successful');
    dispatch(authSuccess(user));

    return type==='admin' ? 
        history.push('/dashboard/admin') 
      ? type==='cashier' ? history.push('/dashboard/cashier') 
      : history.push('/dashboard/customer')
  } catch(error){
    const message = getErrorResponse(error);
    Toastr.error(message);
    dispatch(authFailure(message));
  }
}

export const signup = (data, history)=> async dispatch => {
  const {type, email, password, firstname, lastname} = data;
  dispatch(authPending());
  try {
    const response = await client().post('/auth/signup', {
      firstname,
      lastname,
      email,
      password
    })
    const {data:{ token }} = getSuccessResponse(response);

    saveToLocalStorage(token);
    const user = decodeToken({ history });

    Toastr.success('Welcome to banka');
    dispatch(authSuccess(user));

    return history.push('/dashboard/customer');
  } catch(error){
    const message = getErrorResponse(error);
    Toastr.error(message);
    dispatch(authFailure(message));
  }
}