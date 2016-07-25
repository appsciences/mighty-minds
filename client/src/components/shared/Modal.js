import React from 'react';

const Modal = ({ children, title, onClose }) => (
  <div className="simple-modal">
    <div className="simple-modal-backdrop" onClick={onClose} />
    <div className="simple-modal-container">
      <div className="simple-modal-close" onClick={onClose}>
        <i className="fa fa-times" />
      </div>
      <div className="simple-modal-body">
        <h3 style={{marginTop: 0}}>{title}</h3>
        {children}
      </div>
    </div>
  </div>
);

export default Modal;