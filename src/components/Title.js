import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleComponent = styled.h1`
  font-size: 30px;
  line-height: 42px;
  text-align: center;
  color: white;
`;

class Title extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <TitleComponent>{title}</TitleComponent>
    );
  }
}

export default Title;
