import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';
import * as actions from '@actions/account';
import actionTypes from '@actions/actionTypes';
import mockData from '../__mock__/mockData';

const { FETCH_ACCOUNT_PENDING, FETCH_ACCOUNT_SUCCESS, ACCOUNT_FAILED, FETCH_TRANSACTION_SUCCESS, CREATE_ACCOUNT } = actionTypes;

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

  it('creates AUTH_FAILURE on fetch article failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 400,
        response: authResponse
      });
    });
    const expectedActions = [
      {
        type: FETCH_ACCOUNT_PENDING,
        payload: {
          isPending: true,
        }
      },
      {
        type: ACCOUNT_FAILED,
        payload: {
          isPending: false,
        }
      }
    ];
    return store
      .dispatch(
        actions.fetchAccounts(history)
      )
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
