import { Component } from 'react';

import css from './Modal.module.css';

class Modal extends Component {
  state = {
    isOpenModal: false,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.modalClose();
    }
  };

  render() {
    const {
      modalData: { largeImageURL, tags },
    } = this.props;
    return (
      <div className={css.Overlay} onClick={this.closeModal}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
