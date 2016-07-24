import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const App = ({ children, overflowedNavBar }) => (
  <div>
    <NavBar
      overflowed={overflowedNavBar}
    />
    <div>
      {children}
    </div>
    <Footer />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const overflowedNavBar = ownProps.location.pathname === '/';

  return {
    children: ownProps.children,
    overflowedNavBar
  };
};

export default connect(mapStateToProps)(App);