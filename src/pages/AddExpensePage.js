import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { database } from 'configFirebase';
import styled from 'styled-components';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import v4 from 'uuid';
import Spacer from 'components/Spacer';
import TextField from 'components/TextField';
import { Button } from 'components/Button/Button';
import Title from 'components/Title';
import Checkbox from 'components/Checkbox';
import SelectField from 'components/SelectField';
import { AddCategoryModal } from 'components/AddCategoryModal/AddCategoryModal';

const WrapperComponent = styled.section`
  width: 420px;
  margin: 0 auto;
  text-align: center;
`;

const mapStateToProps = (state) => ({
  auth: state.auth,
  categories: state.categories,
});

@connect(mapStateToProps)
class AddExpensePage extends Component {
  static propTypes = {
    auth: PropTypes.shape({}).isRequired,
    categories: PropTypes.instanceOf(Record),
  };

  static defaultProps = {
    categories: Record(),
  };


  state = {
    show: false,
  };

  componentDidMount() {
    this.setState({
      category: this.select.value,
      isIncome: this.checkbox.checked,
    });
  }

  handleChange = (e) => {
    const { target: { value } } = e;
    this.setState({
      [e.target.name]: value,
    });
  }

  handleShow = () => this.setState({ show: true });

  handleClose = () => this.setState({ show: false })

  handleChangeCheckBox = (e) => {
    this.setState({ [e.target.name]: this.checkbox.checked });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { category, isIncome, price, description } = this.state;
    const { auth: { user } } = this.props;
    const id = v4();
    const date = new Date().toString();
    const refDB = database.ref(`items/${user.uid}`);
    const data = {
      id,
      category,
      isIncome,
      price,
      description,
      date,
    };

    refDB.push(data);
  }

  render() {
    const { categories: { list } } = this.props;

    return (
      <WrapperComponent>
        <Spacer>
          <Title title="Add Expense" />
          <form onSubmit={this.handleSubmit}>
            <Spacer direction="vertical" size={20} indent={false}>
              <Checkbox
                onChange={this.handleChangeCheckBox}
                name="isIncome"
                refs={(checkbox) => { this.checkbox = checkbox; }}
              />
            </Spacer>
            <Spacer direction="vertical" size={20} indent={false}>
              <SelectField
                options={list}
                onChange={this.handleChange}
                name="category"
                refs={(select) => { this.select = select; }}
              />
              <Button text="add custom category" onClick={this.handleShow} />
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
        {this.state.show ? <AddCategoryModal onCloseModal={this.handleClose} /> : null}
      </WrapperComponent>
    );
  }
}

export default AddExpensePage;
