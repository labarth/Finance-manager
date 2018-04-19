import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelComponent = styled.label`
  width: 64px;
  height: 34px;
  box-shadow: 0 1px 4px rgba(0,0,0, 0.2);
  position: relative;
  display: block;
  border-radius: 32px;
  cursor: pointer;
  
  :after {
    position: absolute;
    top: 2px;
    right: 2px;
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    transition: right .2s, background .12s;
 
  }  
`;

const ComponentCheckbox = styled.input`
    opacity: 0;
  
    :checked + ${LabelComponent}:after {
      right: 32px;
      background-color: green;
    }
`;

class Checkbox extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    refs: PropTypes.func,
    defaultChecked: PropTypes.bool,
  };

  static defaultProps = {
    defaultChecked: false,
    refs: Function.prototype,
    onChange: Function.prototype,
  };

  render() {
    const { onChange, defaultChecked, name, refs } = this.props;
    return (
      <div style={{ display: 'inline-block' }}>
        <ComponentCheckbox
          type="checkbox"
          id="checkbox"
          defaultChecked={defaultChecked}
          onChange={onChange}
          name={name}
          innerRef={refs}
        />
        <LabelComponent
          htmlFor="checkbox"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Checkbox;
