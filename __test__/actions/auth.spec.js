import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import * as actions from '@actions/auth';
import actionTypes from '@actions/actionTypes';
import mockData from '../__mock__/mockData';

const { AUTH_PENDING, AUTH_SUCCESS, AUTH_FAILED } = actionTypes;

const mockStore = configureMockStore([thunk]);

const { authResponse } = mockData;

const initialState = {
  isPending: false,
  isAuthenticated: false,
  user: null,
  error: null
};

const store = mockStore({
  auth: initialState
});

// jwt decode mock
jest.mock('jwt-decode');
jwtDecode.mockImplementation(() => ({
  exp: (new Date().getTime() + 50000) / 1000,
  ...authResponse
}));

// localstorage mocks
localStorage.getItem = jest.fn().mockImplementation(() => authResponse.token);

// history mock
const history = {
  push: jest.fn()
};


describe('Action tests', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates AUTH_SUCCESS, AUTH_PENDING when login is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: authResponse
      });
    });
    const expectedActions = [
      {
        type: AUTH_PENDING,
        payload: {
          isPending: true,
        }
      },
      {
        type: AUTH_SUCCESS,
        payload: {
          isPending: false,
          isAuthenticated: true,
          user: authResponse,
        }
      }
    ];

    return store
      .dispatch(
        actions.login({
          userData: { email: '', password: '' },
          history,
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates AUTH_FAILURE on login failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 400,
        response: authResponse
      });
    });
    const expectedActions = [
      {
        type: AUTH_PENDING,
        payload: {
          isPending: true,
        }
      },
      {
        type: AUTH_FAILED,
        payload: {
          isPending: false,
        }
      }
    ];
    return store
      .dispatch(
        actions.login({ userData: { email: '', password: '' }, history })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates AUTH_SUCCESS, AUTH_PENDING when signup is successful', () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: authResponse
      });
    });
    const expectedActions = [
      {
        type: AUTH_PENDING,
        payload: {
          isPending: true,
        }
      },
      {
        type: AUTH_SUCCESS,
        payload: {
          isPending: false,
          isAuthenticated: true,
          user: authResponse,
        }
      }
    ];

    return store
      .dispatch(
        actions.signup({
          userData: { email: '', password: '' },
          history,
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates AUTH_FAILURE on signup failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 400,
        response: authResponse
      });
    });
    const expectedActions = [
      {
        type: AUTH_PENDING,
        payload: {
          isPending: true,
        }
      },
      {
        type: AUTH_FAILED,
        payload: {
          isPending: false,
        }
      }
    ];
    return store
      .dispatch(
        actions.signup({ userData: { email: '', password: '' }, history })
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
