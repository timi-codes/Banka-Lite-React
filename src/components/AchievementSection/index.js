import React from 'react';
import './achievementsection.css';

const AchievementSection = () => {
  return (
    <div className="achievement-section" id="test">
      <div className="achievement">
        <img
          src="../../../public/assets/images/branch_img.svg"
          alt="200 Branches"
        />
        <div>
          <h4>200</h4>
          <p>Branches</p>
        </div>
      </div>

      <div className="achievement">
        <img
          src="../../../public/assets/images/transactions-img.svg"
          alt="100K Transactions"
        />
        <div>
          <h4>100K</h4>
          <p>Transactions</p>
        </div>
      </div>

      <div className="achievement">
        <img
          src="../../../public/assets/images/happy-customer-img.svg"
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
