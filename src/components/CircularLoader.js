import React, { PureComponent } from 'react';
import styled from 'styled-components';

const CircularWrapper = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircularLoaderComponent = styled.div`
    width: 50px;
    height: 50px;
    background-color: whitesmoke;
    margin: 70px;
    position: relative;
    display: inline-block;
    border-radius: 50%;
    
    :before {
      content: "";
      position: absolute;
      top: -8px;
      left: -8px;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: solid 8px lightgrey;
      border-top-color: #00a1f2;
      z-index: 100;
      animation: loader-lazy 1s infinite;
    }
    
    :after {
      content: "";
      position: absolute;
      top: -8px;
      left: -8px;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: solid 8px lightgrey;
      border-top-color: #00a1f2;
    }
    
    @keyframes loader-lazy {
      0%{transform: rotate(0deg);}
      100%{transform: rotate(360deg);}
    }
`;

class CircularLoader extends PureComponent {
  render() {
    return (
      <CircularWrapper>
        <CircularLoaderComponent />
      </CircularWrapper>
    );
  }
}

export default CircularLoader;
