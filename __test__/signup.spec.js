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
  isPending: false,
  error: null,
  onSubmit: jest.fn(),
  history: {
    push: jest.fn()
  }
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

    const passwordInputElement = getByTestId('password');
    fireEvent.change(passwordInputElement, {
      target: { value: 'password' }
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

  test('should render an error message when email is invalid', async () => {
    const { getByTestId } = renderWithRTL(initialSate);

    const emailInputElement = getByTestId('email');
    fireEvent.change(emailInputElement, { target: { value: 'timitejumola.com' } });
    fireEvent.blur(emailInputElement);
    await waitForDomChange();
    const validationErrors = getByTestId('email-error');
    expect(validationErrors.innerHTML).toMatch(
      /Invalid email address/
    );
  });

  it('should render an error if password is less than 8 characters', async () => {
    const { getByTestId } = renderWithRTL(initialSate);

    const passwordInputElement = getByTestId('password');
    fireEvent.change(passwordInputElement, { target: { value: 'pas' } });
    fireEvent.blur(passwordInputElement);
    await waitForDomChange(() => {
      const validationErrors = getByTestId('password-error');
      expect(validationErrors.innerHTML).toMatch(/password should be a minimun of 8 characters/);
    });
  });

  test('should render an error message when first name is empty', async () => {
    const { getByTestId } = renderWithRTL(initialSate);

    const fnameInputElement = getByTestId('firstname');
    fireEvent.change(fnameInputElement, { target: { value: '' } });
    fireEvent.blur(fnameInputElement);
    await waitForDomChange();
    const validationErrors = getByTestId('fname-error');
    expect(validationErrors.innerHTML).toMatch(
      /First Name is required/
    );
  });

  test('should render an error message when last name is empty', async () => {
    const { getByTestId } = renderWithRTL(initialSate);

    const lnameInputElement = getByTestId('lastname');
    fireEvent.change(lnameInputElement, { target: { value: '' } });
    fireEvent.blur(lnameInputElement);
    await waitForDomChange();
    const validationErrors = getByTestId('lname-error');
    expect(validationErrors.innerHTML).toMatch(
      /Last Name is required/
    );
  });
});