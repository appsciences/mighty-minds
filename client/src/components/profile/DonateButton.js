import React from 'react';

const DonateButton = ({ onSubmit }) => {
  let input;

  return (
    <div className="donate-button">
      <input
        type="text"
        className="donate-input"
        ref={ref => input = ref}
      />
      <div className="btn btn-primary btn-xl" onClick={() => input.value && onSubmit(input.value)}>
        Donate
      </div>
    </div>
  );
};

export default DonateButton;