import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <div className="striped-form">
        <div className="row">
          <div className="input-holder col-md-12">
            <input type="email" placeholder="Email Address" />
          </div>
        </div>
        <div className="row">
          <div className="input-holder col-md-12">
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <div className="btn btn-primary btn-xl">
        Log In
      </div>
    </div>
  );
};

export default LoginForm;