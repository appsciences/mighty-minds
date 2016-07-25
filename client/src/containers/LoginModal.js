import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { closeLoginModal } from '../actionCreators/modals';

import Modal from '../components/shared/Modal';

const LoginModal = ({ show, closeLoginModal }) => (
  <div>
    {
      show &&
      <Modal title="Login" onClose={closeLoginModal}>
        dasdas
      </Modal>
    }
  </div>
);

const mapStateToProps = (state) => ({
  show: state.modals.showLoginModal
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ closeLoginModal }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);