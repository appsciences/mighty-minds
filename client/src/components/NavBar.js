import React from 'react';
import { Link } from 'react-router';

const NavBar = ({ overflowed, onLoginClick, onSignupClick }) => {
  const position = overflowed ? 'absolute' : 'static';

  return (
    <nav className={`navbar navbar-default navbar-fixed-top ${!overflowed ? 'navbar-dark' : ''}`}
         style={{ position }}>
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="/">Mighty Minds</a>
        </div>

        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/students-list">Support a Student</Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a onClick={onSignupClick}>Sign Up</a>
            </li>
            <li>
              <a onClick={onLoginClick}>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  overflowed: React.PropTypes.bool
};


export default NavBar;