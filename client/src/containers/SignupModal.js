import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { closeSignupModal } from '../actionCreators/modals';

import Modal from '../components/shared/Modal';
import SignupForm from '../components/SignupForm';

const SignupModal = ({ show, closeSignupModal }) => (
  <div>
    {
      show &&
      <Modal title="Sign up" onClose={closeSignupModal}>
        <SignupForm />
      </Modal>
    }
  </div>
);

const mapStateToProps = (state) => ({
  show: state.modals.showSignupModal
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeSignupModal }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);