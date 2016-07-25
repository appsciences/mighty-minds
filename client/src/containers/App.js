import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openLoginModal } from '../actionCreators/modals';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LoginModal from './LoginModal';

const App = ({ children, overflowedNavBar, openLoginModal }) => (
  <div>
    <NavBar
      overflowed={overflowedNavBar}
      onLoginClick={openLoginModal}
    />
    <div>
      {children}
    </div>
    <Footer />

    {/* Global modals */}
    <LoginModal />
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const overflowedNavBar = ownProps.location.pathname === '/';

  return {
    children: ownProps.children,
    overflowedNavBar
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ openLoginModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);