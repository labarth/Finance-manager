import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Immutable from 'immutable';
import v4 from 'uuid';
import { connect } from 'react-redux';
import Spacer from 'components/Spacer';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Title from 'components/Title';
import Checkbox from 'components/Checkbox';
import SelectField from 'components/SelectField';
import { database } from 'configFirebase';

const WrapperComponent = styled.section`
  width: 420px;
  margin: 0 auto;
  text-align: center;
`;

const mapDispatchToProps = state => ({
  options: state.categories,
});

@connect(mapDispatchToProps, null)
class AddExpensePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
    }),
    options: PropTypes.instanceOf(Immutable.List).isRequired,
  };

  static defaultProps = {
    user: {},
  };

  componentDidMount() {
    this.setState({
      category: this.select.value,
      isExpanse: this.checkbox.checked,
    });
  }

  handleChange = (e) => {
    const { target: { value } } = e;
    this.setState({ [e.target.name]: value });
  }

  handleChangeCheckBox = (e) => {
    this.setState({ [e.target.name]: this.checkbox.checked });
  }


  handleSubmit = (e) => {
    e.preventDefault();

    const { category, isExpanse, price, description } = this.state;
    const id = v4();
    const date = new Date().toString();
    const refDB = database.ref(`items/${this.props.user.uid}`);
    const data = {
      id,
      category,
      isExpanse,
      price,
      description,
      date,
    };

    refDB.push(data);
  }

  render() {
    return (
      <WrapperComponent>
        <Spacer>
          <Title title="Add Expense" />
          <form onSubmit={this.handleSubmit}>
            <Spacer direction="vertical" size={20} indent={false}>
              <Checkbox
                onChange={this.handleChangeCheckBox}
                name="isExpanse"
                refs={(checkbox) => { this.checkbox = checkbox; }}
              />
            </Spacer>
            <Spacer direction="vertical" size={20} indent={false}>
              <SelectField
                options={this.props.options}
                onChange={this.handleChange}
                name="category"
                refs={(select) => { this.select = select; }}
              />
            </Spacer>
            <Spacer direction="vertical" size={20} indent={false}>
              <TextField
                type="text"
                placeholder="Enter description..."
                onChange={this.handleChange}
                name="description"
              />
            </Spacer>
            <Spacer direction="vertical" size={10} indent={false}>
              <TextField
                type="number"
                placeholder="Enter price"
                onChange={this.handleChange}
                name="price"
              />
            </Spacer>
            <Spacer direction="top" size={10} indent={false}>
              <Button text="Submit" />
            </Spacer>
          </form>
        </Spacer>
      </WrapperComponent>
    );
  }
}

export default AddExpensePage;
