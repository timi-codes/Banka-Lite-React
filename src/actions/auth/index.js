import actionTypes from '@actions/actionTypes';
import client from '@config/client';
import { getErrorResponse, getSuccessResponse } from '@utils/getResponse';
import * as Toastr from 'toastr';
import jwtDecode from 'jwt-decode';
import { saveToLocalStorage, decodeToken } from '@utils';

const { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED, GET_USER_FROM_TOKEN, LOG_OUT } = actionTypes;

export const getUser = (data)=>({ 
  type: GET_USER_FROM_TOKEN, 
  payload: {
    user: data
  } 
});

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

export const getUserFromToken = (history) => {
  return async dispatch => {
    const token = localStorage.getItem('token');
    if(token) {
      const payload = jwtDecode(token);
      const { exp, ...data } = payload;
      const time = Date.now() / 1000;
      if (exp > time) {
        dispatch(getUser(data));
      }
      return history && history.push('/');
    }
    dispatch({ type: LOG_OUT, payload: { isPending: false, user: {}, error: ''}});
    return history && history.push('/');
  }
}

export const login = ({userData, history})=> {
  return async dispatch => {
    const {email, password} = userData;
    dispatch(authPending());
    try {
      const response = await client().post('/auth/signin', {
        email,
        password
      });

      const {data:{ token, type, isAdmin, firstName, lastName }} = getSuccessResponse(response);

      saveToLocalStorage(token);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);

      const user = decodeToken({ history });
  
      Toastr.success('Login was successful');
      dispatch(authSuccess(user));
  
      if(type==='staff' && isAdmin){
        return history.push('/dashboard/admin');
      }if(type==='staff' && !isAdmin){
        return history.push('/dashboard/cashier');
      }
        return history.push('/dashboard/customer')
      
    } catch(error){
      const message = getErrorResponse(error);
      Toastr.error(message);
      dispatch(authFailure(message));
    }
  }
}

export const signup = ({userData, history})=> async dispatch => {
  const {email, password, firstname: firstName, lastname: lastName } = userData;

  dispatch(authPending());
  try {
    const response = await client().post('/auth/signup', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword: password
    });

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