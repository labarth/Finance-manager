import React, { Component } from 'react';
import styled from 'styled-components';
import v4 from 'uuid';
import { List, Map } from 'immutable';
import Spacer from 'components/Spacer';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Title from 'components/Title';
import Checkbox from 'components/Checkbox';
import SelectField from 'components/SelectField';
import { database } from 'configFirebase';
import firebase from 'firebase';

const options = List([
  Map({ label: 'Дом', value: v4() }),
  Map({ label: 'Еда', value: v4() }),
  Map({ label: 'Авто', value: v4() }),
]);

const WrapperComponent = styled.section`
  width: 420px;
  margin: 0 auto;
  text-align: center;
`;

class AddExpensePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  componentDidMount() {
    this.setState({
      select: this.select.value,
      isExpanse: this.checkbox.checked,
    });
    const userRef = database.ref().child('items');
    userRef.on('value', (snapshot) => {
      const snapshots = JSON.stringify(snapshot);
      snapshot.forEach((item) => {
        const lala = JSON.parse(JSON.stringify(item));
        console.log(new Date(lala.date));
      });
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

    const { select, isExpanse, price, description } = this.state;
    const id = v4();
    const date = new Date().toString();
    firebase.database().ref(`items/${id}`).set({
      id,
      select,
      isExpanse,
      price,
      description,
      date,
    });
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
                options={options}
                onChange={this.handleChange}
                name="select"
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
