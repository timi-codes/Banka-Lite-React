import auth from '@reducers/auth';

describe('Test auth reducer function', () => {
  const initialState = {
    isPending: false,
    isAuthenticated: false,
    user: null,
    error: null
  };
  it('should return the initial state', () => {
    expect(auth(undefined, {})).toEqual(initialState);
  });

  it('should return the pending state', () => {
    const pendingAction = {
      type: 'AUTH_PENDING',
      payload: {
        isPending: true
      }
    };
    expect(auth(initialState, pendingAction)).toEqual({
      isPending: true,
      isAuthenticated: false,
      user: null,
      error: null
    });
  });

  it('should return the success state', () => {
    const successAction = {
      type: 'AUTH_SUCCESS',
      payload: {
        isPending: false,
        isAuthenticated: true,
        user: {},
      }
    };
    expect(auth(initialState, successAction)).toEqual({
      isPending: false,
      isAuthenticated: true,
      user: {},
      error: null
    });
  });

  it('should test get token from user reducer', () => {
    const mainAction = {
      type: 'GET_USER_FROM_TOKEN',
      payload: {
        user: {
          email: "timitejumola@gmail.com"
        },
      }
    };
    expect(auth(initialState, mainAction)).toEqual({
      isPending: false,
      isAuthenticated: false,
      user: {
        email: "timitejumola@gmail.com"
      },
      error: null
    });
  });


  it('should return the failed state', () => {
    const pendingAction = {
      type: 'AUTH_FAILED',
      payload: {
        isPending: false,
        error: 'with error message'
      }
    };
    expect(auth(initialState, pendingAction)).toEqual({
      isPending: false,
      isAuthenticated: false,
      user: null,
      error: 'with error message'
    });
  });
});