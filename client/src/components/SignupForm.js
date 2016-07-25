import React from 'react';

const SignupForm = () => {
  return (
    <div>
      <div className="striped-form">
        <div className="row">
          <div className="input-holder col-md-12">
            <input type="email" placeholder="Full Name" />
          </div>
        </div>
        <div className="row">
          <div className="input-holder col-md-6">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-holder col-md-6">
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="btn btn-primary btn-xl">
        Sign Up
      </div>
    </div>
  );
};

export default SignupForm;