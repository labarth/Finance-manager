import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.5);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalComponent = styled.div`
  position: absolute;
  min-width: 420px;
  max-width: 560px;
  background-color: #fff;
  box-shadow: 0 4px 14px rgba(0,0,0, 0.2);
  padding: 30px;
  border-radius: 4px;
`;

const CloseComponent = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  
  :before,
  :after {
    position: absolute;
    content: '';
    background-color: #000;
    transition: background .1s ease-in;
  }
  
  :hover {
     cursor: pointer;
    :before,
    :after {
      background-color: red;
    }
  }
  
  :before {
    width: 1px;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  :after {
    width: 100%;
    height: 1px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ModalTextComponent = styled.p`
  margin-top: 10px;
`;

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onCloseModal: PropTypes.func,
  };

  static defaultProps = {
    onCloseModal: Function.prototype,
  };

  componentDidMount() {
    window.addEventListener('mousedown', this.handleDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleDocumentClick);
  }

  handleDocumentClick = (e) => {
    if (!this.modal.contains(e.target)) {
      this.props.onCloseModal();
    }
  }

  render() {
    const { onCloseModal } = this.props;

    return (
      ReactDOM.createPortal(
        <ModalWrapper>
          <ModalComponent innerRef={(modal) => { this.modal = modal; }}>
            <CloseComponent onClick={onCloseModal} />
            <ModalTextComponent>{this.props.children}</ModalTextComponent>
          </ModalComponent>
        </ModalWrapper>,
        document.body,
      )
    );
  }
}

export default Modal;
