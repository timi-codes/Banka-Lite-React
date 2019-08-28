import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import jwtDecode from 'jwt-decode';
import LoginPage from '@pages/loginPage';
import SignUpPage from '@pages/signupPage';
import CustomerDashboard from '@pages/customer';
import AccountModal from '@components/Account';
import NavBar from '@components/NavBar';
import NotFoundPage from '@pages/notfound';
import mockData from './__mock__/mockData';

import App from '../src/routes/AppRouter';

const { authResponse } = mockData;

// jwt decode mock
jest.mock('jwt-decode');
jwtDecode.mockImplementation(() => ({
  exp: (new Date().getTime() + 50000) / 1000,
  ...authResponse
}));

// localstorage mocks
localStorage.getItem = jest.fn().mockImplementation(() => authResponse.token);



const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({
  auth: {
    isPending: false,
    isAuthenticated: false,
    user: authResponse,
    error: null
  },
  account: {
    isPending: false,
    accounts: [],
    transactions: [],
    error: null,
  }
});

describe('Application test', () => {
  beforeEach(()=>{
    Modal.setAppElement(document.createElement('div'));
  })
  it('should render index page', () => {
    const comp = (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <App dispatch={jest.fn()} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
    const wrapper = mount(comp);

    expect(wrapper.find('HomePage')).toBeTruthy();
  });
  it('should not crash app', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should work fine on Login Page', () => {
    const props = {
      onSubmit: jest.fn(),
      isAuthenticated: false,
      error: null,
      user: authResponse,
      history: { push: jest.fn() }
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should work fine on SignUp Page', () => {
    const props = {
      onSubmit: jest.fn(),
      isAuthenticated: false,
      error: null,
      user: authResponse,
      history: { push: jest.fn() }
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpPage {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should work fine on CustomerDashboard Page', () => {
    const props = {
      onSubmit: jest.fn(),
      isAuthenticated: false,
      error: null,
      user: {
        email: "sholaadeola@gmail.com",
        id: 4,
        isAdmin: false,
        type: "client"
      },
      history: { push: jest.fn() }
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CustomerDashboard {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should work fine on AccountModal Page', () => {

    const props = {
      createNewAccount: jest.fn,
      error: "error"
    }
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AccountModal {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should work fine on AccountModal Page', () => {

    const props = {
      user: {
        email: "timileyin@gmail.com"
      }
    }
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should test user logout dropwon', () => {

    const props = {
      user: {
        email: "timileyin@gmail.com"
      }
    }
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar {...props} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('Link').simulate('click')
  });

  it('should render notfound page', () => {

    const props = {
      user: {
        email: "timileyin@gmail.com"
      }
    }
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <NotFoundPage {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('should render account modal', () => {

    const props = {
      user: {
        email: "timileyin@gmail.com"
      }
    }
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AccountModal {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
