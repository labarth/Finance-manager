import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spacer from 'components/Spacer';
import TextField from 'components/TextField';
import Button from 'components/Button';

class AddExpensePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Spacer>
        <form>
          <Spacer direction="vertical" size={10} indent={false}>
            <TextField type="text" placeholder="Enter description..." />
          </Spacer>
          <Spacer direction="vertical" size={10} indent={false}>
            <TextField type="number" placeholder="Enter price" />
          </Spacer>
          <Spacer direction="top" size={10} indent={false}>
            <Button text="Submit" />
          </Spacer>
        </form>
      </Spacer>
    );
  }
}

export default AddExpensePage;
