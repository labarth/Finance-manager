import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SelectField extends PureComponent {
  static propTypes = {
    options: PropTypes.shape({}).isRequired,
    onChange: PropTypes.func.isRequired,
    refs: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    refs: Function.prototype,
    value: '',
  };

  render() {
    const { options, value, refs, onChange } = this.props;
    const valueIndex = options.findIndex(option => option.get('value') === value);
    return (
      <select
        defaultValue={options.getIn([valueIndex, 'value'])}
        onChange={onChange}
        ref={refs}
      >
        {
          options.map(option => (
            <option
              key={option.get('value')}
              value={option.get('value')}
            >
              {option.get('label')}
            </option>))
        }
      </select>
    );
  }
}

export default SelectField;
