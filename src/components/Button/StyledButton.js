import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 14px;
  line-height: 36px;
  padding: 0 12px;
  background-color: dodgerblue;
  width: ${(props) => (props.fullWidth && '100%')};
  color: white;
  border-radius: 4px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-family: Verdana, sans-serif;
  outline: none;
  
  :hover:not([disabled]) {
     box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  
  &[disabled] {
    opacity: 0.5;
  }
`;
