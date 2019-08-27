import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch } from 'react-router-dom';
import SignUpPage from '@pages/signupPage'
import { Provider } from 'react-redux';
import {
  render,
  fireEvent,
  waitForDomChange,
  cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore([thunk]);
let store;
const initialSate = {
  isPending: false,
  isSuccess: false,
  error: null,
  message: null
};

const props = {
  isLoading: false,
  showSuccess: false,
  errorMessage: null,
  successMessage: null,
  handleSubmit: jest.fn()
};

const renderWithRTL = state => {
  store = mockStore({
    auth: {
      error: null,
      isAuthenticated: false,
      user: {},
      status: 'rest'
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
            <SignUpPage {...props} />
          </Switch>
        </BrowserRouter>
      </Provider>
    ),
    store
  };
};

describe('Test signup page', () => {
  afterEach(cleanup);
  test('should submit a valid form', async () => {
    const { getByTestId, findByText } = renderWithRTL(initialSate);

    const emailInputElement = getByTestId('email');
    fireEvent.change(emailInputElement, {
      target: { value: 'sholaadeolajfjdfjd@gmail.com' }
    });
    fireEvent.blur(emailInputElement);

    const fnameInputElement = getByTestId('firstname');
    fireEvent.change(fnameInputElement, {
      target: { value: 'shola' }
    });
    fireEvent.blur(fnameInputElement);

    const lnameInputElement = getByTestId('lastname');
    fireEvent.change(lnameInputElement, {
      target: { value: 'shola' }
    });
    fireEvent.blur(lnameInputElement);

    const passwordInputElement = getByTestId('lastname');
    fireEvent.change(passwordInputElement, {
      target: { value: 'adeola' }
    });
    fireEvent.blur(passwordInputElement);

    const formNode = getByTestId('submit-form');
    fireEvent.submit(formNode);

    await waitForDomChange(() => {
      const submitting = findByText('SUBMITTING');
      expect(submitting).toBeTruthy();
      expect(props.handleSubmit).toHaveBeenCalled();
    });
  });
});