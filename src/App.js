import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import toggleTitleAction from './redux/actions/toggleTitle';

const Title = styled.h1`
  font-size: 30px;
  color: blue;
`;

const mapStateToProps = state => ({
  title: state.toggleTitle,
});

const mapDispatchToProps = dispatch => ({
  toggleTitle: data => dispatch(toggleTitleAction(data)),
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    toggleTitle: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: 'undefined title',
  }

  state = {
    active: false,
  };

  handleClick = () => {
    const { toggleTitle } = this.props;

    this.setState({
      active: !this.state.active,
    }, () => (
      this.state.active ?
        toggleTitle('deactivate title')
        :
        toggleTitle('activate title')));
  }

  render() {
    const { title } = this.props;

    return (
      <Title onClick={this.handleClick}>
        {title}
      </Title>
    );
  }
}

export default App;
