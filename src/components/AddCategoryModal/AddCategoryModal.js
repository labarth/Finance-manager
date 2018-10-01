import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import { database } from 'configFirebase';
import Modal from 'components/Modal';
import TextField from 'components/TextField';
import { Button } from 'components/Button/Button';

const mapStateToProps = (state) => ({
  auth: state.auth,
  categories: state.categories,
});

@connect(mapStateToProps, null)
class AddCategoryModal extends PureComponent {
  static propTypes = {
    auth: PropTypes.shape({}),
    categories: PropTypes.instanceOf(Record),
    onCloseModal: PropTypes.func.isRequired,
  };

  static defaultProps = {
    auth: {},
    categories: new Record(),
  };

  state = {
    isInvalidCategory: false,
  }

  handleAddCategory = (e) => {
    e.preventDefault();

    const { auth: { user } } = this.props;

    const { categoryName } = this.state;
    const refDB = database.ref(`categories/${user.uid}`);
    refDB.push({ label: categoryName, value: v4() });

    this.setState({ categoryName: '' });
  }

  handleAddCategoryChange = (e) => {
    const { target: { value } } = e;
    const { categories: { list } } = this.props;
    if (list.size) {
      const isInvalidCategory = !!list.find((category) => category.get('label') === value);
      this.setState({ isInvalidCategory });
    }
    this.setState({ [e.target.name]: value });
  }

  render() {
    const { onCloseModal } = this.props;
    const { isInvalidCategory } = this.state;

    return (
      <Modal
        onCloseModal={onCloseModal}
      >
        <TextField
          type="text"
          placeholder="Enter category name..."
          onChange={this.handleAddCategoryChange}
          name="categoryName"
        />
        <Button text="Ok" disabled={isInvalidCategory} onClick={this.handleAddCategory} />
      </Modal>
    );
  }
}

export { AddCategoryModal };
