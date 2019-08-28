import actionTypes from '@actions/actionTypes';

const { FETCH_ACCOUNT_PENDING, FETCH_ACCOUNT_SUCCESS, ACCOUNT_FAILED, CREATE_ACCOUNT } = actionTypes;

const initialState = {
  isPending: false,
  accounts: [],
  transactions: [],
  error: null
};

const account = (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_ACCOUNT_PENDING:
      return Object.assign({},state,{
        isPending: payload.isPending,
      });
    case FETCH_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        isPending: payload.isPending,
        accounts: payload.accounts
      });
    case CREATE_ACCOUNT:
      return Object.assign({}, state, {
        isPending: payload.isPending,
        accounts: [
          ...state.accounts,
          {
            accountNumber: payload.accountNumber,
            firstName: payload.firstName,
            lastName: payload.lastName,
            type: payload.type,
            balance: payload.balance,
            status: "dormant",
            createdOn: new Date()
          }
        ]
      });
    case ACCOUNT_FAILED:
      return Object.assign({}, state, {
        isPending: false,
    });
    default:
      return state;
  }
};

export default account;
