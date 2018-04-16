import React, { Component } from 'react';
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
  min-height: 120px;
  background-color: #fff;
  box-shadow: 0 4px 14px rgba(0,0,0, 0.2);
  padding: 20px;
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

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
    };
  }

  handleClose = () => {
    console.log('handleClose');
    this.setState({ active: false });
  }

  render() {
    const { active } = this.state;

    return (
      active ?
        <ModalWrapper>
          <ModalComponent>
            <CloseComponent onClick={this.handleClose} />
            {this.props.children}
          </ModalComponent>
        </ModalWrapper>
        : null
    );
  }
}

export default Modal;
