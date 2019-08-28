import React from 'react';
import '../../../public/assets/styles/servicesection.css';
import OpenAccountIcon from '../../../public/assets/images/open-account-img.svg';
import TransationIcon from '../../../public/assets/images/transaction-history-img.svg';
import SupportIcon from '../../../public/assets/images/internet-support-img.svg';

const ServiceSection = () => {
  return (
    <div className="actions-section">
      <div className="action">
        <img
          src={OpenAccountIcon}
          alt="Open an account"
        />
        <div>
          <h4>Open an account</h4>
        </div>
      </div>

      <div className="action">
        <img
          src={TransationIcon}
          alt="100K Transactions"
        />
        <div>
          <h4>View transaction history</h4>
        </div>
      </div>

      <div className="action">
        <img
          src={SupportIcon}
          alt="3M Happy Customers"
        />
        <div>
          <h4>Internet support</h4>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
