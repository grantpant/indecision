import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));

const OptionModal = (props) => (
  <Modal
    className="modal"
    // Logical NOT will convert expression to Boolean equivalent
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
  >
    <h3 className="modal__title">Select Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button
      className="button"
      onClick={props.handleClearSelectedOption}
    >
      OK
    </button>
  </Modal>
);

export default OptionModal;