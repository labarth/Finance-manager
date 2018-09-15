import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => (props.backgroundColor)};
  width: ${(props) => (props.fullWidth && '100%')};
  color: ${(props) => (props.color)};
  font-size: 14px;
  line-height: 36px;
  letter-spacing: 1.3px;
  padding: 0 12px;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  font-family: Verdana, sans-serif;
  outline: none;
  
  :hover:not([disabled]) {
     box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  &[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
`;
