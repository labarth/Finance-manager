import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleComponent = styled.h1`
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: ${(props) => props.color};
`;

class Title extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
  };

  static defaultProps = {
    color: '#000',
  }

  render() {
    const { title, color } = this.props;

    return (
      <TitleComponent color={color}>{title}</TitleComponent>
    );
  }
}

export default Title;
