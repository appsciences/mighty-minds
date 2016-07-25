import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { openLoginModal, openSignupModal } from '../actionCreators/modals';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

const App = ({ children, overflowedNavBar, openLoginModal, openSignupModal }) => (
  <div>
    <NavBar
      overflowed={overflowedNavBar}
      onLoginClick={openLoginModal}
      onSignupClick={openSignupModal}
    />
    <div>
      {children}
    </div>
    <Footer />

    {/* Global modals */}
    <LoginModal />
    <SignupModal />
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
  return bindActionCreators({
    openLoginModal,
    openSignupModal
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);