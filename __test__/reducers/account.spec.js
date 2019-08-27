import account from '@reducers/account';

describe('Test auth reducer function', () => {
  const initialState = {
    isPending: false,
    accounts: [],
    transactions: [],
    error: null
  };
  it('should return the initial state', () => {
    expect(account(undefined, {})).toEqual(initialState);
  });

  it('should return the pending state', () => {
    const pendingAction = {
      type: 'FETCH_ACCOUNT_PENDING',
      payload: {
        isPending: true,
        accounts: [],
        transactions: []
      }
    };
    expect(account(initialState, pendingAction)).toEqual({
      isPending: true,
      accounts: [],
      transactions: [],
      error: null
    });
  });

  it('should return the success state', () => {
    const pendingAction = {
      type: 'FETCH_ACCOUNT_SUCCESS',
      payload: {
        isPending: false,
        accounts: [{
          accountNumber: "20020202020",
          type: "current"
        },
        {
          accountNumber: "20020202020",
          type: "savings"
        }
      ],
      }
    };
    expect(account(initialState, pendingAction)).toEqual({
      isPending: false,
      accounts: [{
        accountNumber: "20020202020",
        type: "current"
      },
      {
        accountNumber: "20020202020",
        type: "savings"
      }
    ],
    transactions: [],
    error: null
    });
  });

  it('should return the failed state', () => {
    const pendingAction = {
      type: 'ACCOUNT_FAILED',
      payload: {
        isPending: false,
      }
    };
    expect(account(initialState, pendingAction)).toEqual({
      isPending: false,
      accounts: [],
      transactions: [],
      error: null
    });
  });

  it('should create an account state', () => {
    const createAccountAction = {
      type: 'CREATE_ACCOUNT',
      payload: {
        isPending: false,
        accountNumber: "0222010772",
        firstName: "timi",
        lastName: "tejumola",
        type: "savings",
        balance: "0.00",
        status: "dormant",
        createdOn: "27-01-2012"
      }
    };
    expect(account(initialState, createAccountAction)).toEqual({
      isPending: false,
      accounts: [
        {
          accountNumber: "0222010772",
          firstName: "timi",
          lastName: "tejumola",
          type: "savings",
          balance: "0.00",
          status: "dormant",
          createdOn: new Date()
        }
      ],
      transactions: [],
      error: null
    }

    );
  });
});