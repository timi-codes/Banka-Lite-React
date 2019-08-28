import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch } from 'react-router-dom';
import CustomerDashboard from '@pages/customer'
import { Provider } from 'react-redux';
import {
  render,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([thunk]);
let store;
const initialSate = {
  isPending: false,
  isAuthenticated: false,
  error: null,
  user:{},
  accounts: []
};

const props = {
  isPending: false,
  error: null,
  accounts: [
    {
      
    }
  ],
   user: {
     email: 'email@gmail.com'
   },
  getAccounts: jest.fn(),
  history: {
    push: jest.fn()
  },
  getCurrentUser: jest.fn()
};

const renderWithRTL = state => {
  store = mockStore({
    auth: {
      isPending: false,
      error: null,
      isAuthenticated: true,
      user: {
        email: 'email@gmail.com'
      },
    },
    account: {
      ...state
    }
  });
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <CustomerDashboard {...props} />
          </Switch>
        </BrowserRouter>
      </Provider>
    ),
    store
  };
};

describe('Test signup page', () => {
  afterEach(cleanup);
  test('should render customer dashboard when empty', async () => {
    const { container } = renderWithRTL(initialSate);
    expect(container).toMatchSnapshot()

  });

  test('should render customer table with account', async () => {
    const { container } = renderWithRTL({
      accounts:[
        {
          accountNumber: "10184349343403",
          firstName: "Timi",
          lastName: "Tejumola",
          type: "savings",
          balance: "1000",
          status: "dormant",
          createdOn: new Date()
        }
      ]
    });
    expect(container).toMatchSnapshot()

  });
});