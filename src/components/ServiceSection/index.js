import React from 'react';
import './servicesection.css';

const ServiceSection = () => {
  return (
    <div className="actions-section">
      <div className="action">
        <img
          src="../../../public/assets/images/open-account-img.svg"
          alt="Open an account"
        />
        <div>
          <h4>Open an account</h4>
        </div>
      </div>

      <div className="action">
        <img
          src="../../../public/assets/images/transaction-history-img.svg"
          alt="100K Transactions"
        />
        <div>
          <h4>View transaction history</h4>
        </div>
      </div>

      <div className="action">
        <img
          src="../../../public/assets/images/internet-support-img.svg"
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
