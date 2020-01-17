import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#main');

class FoiaModal extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="usa-button usa-button-outline" type="button">Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          aria={{
            labelledby: 'heading_id_placehoder',
            describedby: 'full_description',
          }}
          contentLabel="Example Modal"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal__close">
            <button onClick={this.closeModal} className="close-button" type="button">
              <span className="visually-hidden">close</span>
            </button>
          </div>
          <div className="modal__inner">
            <h2 id="heading_id_placehoder" className="modal__title">Lorem Ipsum</h2>
            <div className="modal__content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                nec tortor nunc. Nunc eget sapien nunc. Suspendisse tincidunt
                tristique semper. Phasellus imperdiet nunc at vestibulum
                elementum. Fusce congue suscipit pellentesque. Nunc volutpat
                sollicitudin gravida. Ut euismod ligula eget mi efficitur,
                vulputate facilisis purus eleifend. Donec lacinia justo nec
                lectus ornare, vel maximus justo pretium.
              </p>
              <p>ed euismod tempus posuere. Vestibulum consectetur tincidunt
                nisl tristique eleifend. Aenean sollicitudin, arcu nec
                tincidunt sodales, augue justo elementum mauris, nec molestie
                mi felis sed nisi. Vestibulum bibendum tortor a interdum
                ultrices.
              </p>
            </div>
            <div className="modal__footer">
              <form>
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default FoiaModal;
