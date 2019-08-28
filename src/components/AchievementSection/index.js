import React from 'react';
import '../../../public/assets/styles/achievementsection.css';
import BranchIcon from '../../../public/assets/images/branch_img.svg';
import TransactionIcon from '../../../public/assets/images/transactions-img.svg';
import CustomerIcon from '../../../public/assets/images/happy-customer-img.svg';

const AchievementSection = () => {
  return (
    <div className="achievement-section" id="test">
      <div className="achievement">
        <img
          src={BranchIcon}
          alt="200 Branches"
        />
        <div>
          <h4>200</h4>
          <p>Branches</p>
        </div>
      </div>

      <div className="achievement">
        <img
          src={TransactionIcon}
          alt="100K Transactions"
        />
        <div>
          <h4>100K</h4>
          <p>Transactions</p>
        </div>
      </div>

      <div className="achievement">
        <img
          src={CustomerIcon}
          alt="3M Happy Customers"
        />
        <div>
          <h4>3M</h4>
          <p>Happy Customers</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
