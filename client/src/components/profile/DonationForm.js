import React from 'react';

const DonationForm = () => {

  return (
    <div>
      <div className="striped-form">
        <div className="row">
          <div className="input-holder col-md-12">
            <input type="text" placeholder="Your Full Name"/>
          </div>
        </div>
        <div className="row">
          <div className="input-holder col-md-6">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-holder col-md-6">
            <input type="password" placeholder="Password (optional)"/>
          </div>
        </div>
        <div className="row">
          <div className="input-holder col-md-6">
            <input type="text" placeholder="Credit Card Number"/>
          </div>
          <div className="input-holder col-md-3">
            <input type="text" placeholder="MM / YY"/>
          </div>
          <div className="input-holder col-md-3">
            <input type="text" placeholder="CVV"/>
          </div>
        </div>
        <div className="row">
          <div className="input-holder col-md-12">
            <input type="text" placeholder="Note (optional)"/>
          </div>
        </div>
      </div>
      <div>
        <label>
          <input type="checkbox" /> Add an optional $3.50 tip.
        </label>
      </div>
      <div className="btn btn-primary btn-xl">
        Donate
      </div>
    </div>
  );
};

export default DonationForm;