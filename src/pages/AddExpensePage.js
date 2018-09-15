import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List } from 'immutable';
import { connect } from 'react-redux';
import v4 from 'uuid';
import Spacer from 'components/Spacer';
import TextField from 'components/TextField';
import { Button } from 'components/Button/Button';
import Title from 'components/Title';
import Checkbox from 'components/Checkbox';
import SelectField from 'components/SelectField';
import { database } from 'configFirebase';
import { getCategories } from '../redux/actions/dbActions';

const WrapperComponent = styled.section`
  width: 420px;
  margin: 0 auto;
  text-align: center;
`;

const mapStateToProps = (state) => ({
  categories: state.db.categories,
});

@connect(mapStateToProps, { getCategories })
class AddExpensePage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
    }),
    categories: PropTypes.instanceOf(List),
    getCategories: PropTypes.func,
  };

  static defaultProps = {
    user: {},
    categories: List(),
    getCategories: Function.prototype,
  };

  state = {
    isInvalidCategory: false,
  }

  componentDidMount() {
    this.setState({
      category: this.select.value,
      isIncome: this.checkbox.checked,
    });

    if (this.props.user) {
      this.props.getCategories(this.props.user.uid);
    }
  }

  handleChange = (e) => {
    const { target: { value } } = e;
    this.setState({
      [e.target.name]: value,
    });
  }

  handleAddCategoryChange = (e) => {
    const { target: { value } } = e;
    const { categories } = this.props;
    if (categories.size) {
      const isInvalidCategory = !!categories.find((category) => category.get('label') === value);
      this.setState({ isInvalidCategory });
    }
    this.setState({ [e.target.name]: value });
  }

  handleChangeCheckBox = (e) => {
    this.setState({ [e.target.name]: this.checkbox.checked });
  }

  handleAddCategory = (e) => {
    e.preventDefault();

    const { categoryName } = this.state;
    const refDB = database.ref(`categories/${this.props.user.uid}`);
    refDB.push({ label: categoryName, value: v4() });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { category, isIncome, price, description } = this.state;
    const id = v4();
    const date = new Date().toString();
    const refDB = database.ref(`items/${this.props.user.uid}`);
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
    return (
      <WrapperComponent>
        <Spacer>
          <Title title="Add Expense" />
          <form onSubmit={this.handleAddCategory}>
            <TextField
              type="text"
              placeholder="Enter category name..."
              onChange={this.handleAddCategoryChange}
              name="categoryName"
            />
            <Button text="Ok" disabled={this.state.isInvalidCategory} />
          </form>
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
                options={this.props.categories}
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
