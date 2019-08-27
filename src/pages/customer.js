import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchAccounts } from '@actions/account'
import SyncLoader from 'react-spinners/SyncLoader';
import AccountModal from '@components/Account';
import NavBar from '@components/NavBar';
import Modal from 'react-modal';
import { decodeToken } from '@utils';
import '../../public/assets/styles/customer.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    overflow: 'hidden',
    position: 'fixed',
  },
};

Modal.setAppElement('#root');


class CustomerDashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      modalType: 'none'
    }
  }

  componentDidMount () {
    const {getAccounts, history} = this.props
    getAccounts('sholaadeola@gmail.com', history)
  }

  setModalType (type){
    this.setState({
      modalType: type
    });
  }

  closeModal(){
    this.setState({
      modalType: 'none'
    });
  }

  render() {
    const { modalType } = this.state;
    console.log(modalType)

    const { isPending, accounts, error, history } = this.props;
    console.log(accounts.length);
    const user = decodeToken(history)
    return (
      <div className="dash-wrapper">
        <NavBar className="header" user={user} />
        <div className="banner">
          <div className="balance">
            <p>Account Balance</p>
            <h3 id="current-balance">0.00</h3>
          </div>
          <button
            id="account-button"
            type="button"
            onClick={() => {
                this.setModalType('create_account');
          }}
          >
          Create an account
          </button>
        </div>
        <div className="content">
          <SyncLoader
            sizeUnit="em"
            size={0.6}
            color="blue"
            loading={isPending}
          />
          {
          (accounts.length > 0 && !isPending) ? (
            <>
              <div className="tableDiv">
                <table id="account-table">
                  <thead>
                    <tr>
                      <th className="table-title" colSpan="6">
                      My Accounts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="table-header" />
                      <th className="table-header">Type</th>
                      <th className="table-header">Account Number</th>
                      <th className="table-header">Status</th>
                      <th className="table-header">Created On</th>
                      <th className="table-header">Balance</th>
                    </tr>
                    {  accounts.map(account=>{
                    const formatted = moment(account.createdOn).format('D, MMMM YYYY')
                    return (
                      <tr>
                        <td>
                          <img src={`../../public/assets/images/${account.type}-account-logo.svg`} alt={`${account.type}`} />                          
                        </td>
                        <td>
                          {account.type}
                        </td>
                        <td>
                          {account.accountNumber}
                        </td>
                        <td>
                          {account.status}
                        </td>
                        <td>
                          {formatted}
                        </td>
                        <td>
                        ₦
                          {account.balance}
                        </td>
                      </tr>
                  )})
                  }
                  </tbody>
                </table>
              </div>
            </>
          ) : (<div id="accountText">No account has been created</div>) 
        }
        </div>

        <Modal
          isOpen={modalType === 'create_account'}
          onRequestClose={()=>this.closeModal()}
          style={customStyles}
          contentLabel="Create Account Modal"
        >
          <AccountModal close={()=>this.closeModal()} />
        </Modal>
      </div>
    )
  };
};


CustomerDashboard.defaultProps = {
  error: null,
};

CustomerDashboard.propTypes = {
  isPending: PropTypes.bool.isRequired,
  error: PropTypes.string,
  accounts: PropTypes.array.isRequired,
  getAccounts: PropTypes.func.isRequired
}


const mapStateToProps = (state)=>({
  isPending: state.account.isPending,
  error: state.account.error,
  user: state.auth.user,
  accounts: state.account.accounts,
  transactions: state.account.transactions
});

const mapDispatchToProps = dispatch => ({
  getAccounts : (history) => { dispatch(fetchAccounts(history))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerDashboard);
