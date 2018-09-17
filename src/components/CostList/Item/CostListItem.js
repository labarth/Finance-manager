import React from 'react';
import PropTypes from 'prop-types';
import { StyledCostListItem } from './StyledCostListItem';

export const CostListItem = ({ item: { date, description, category, price, isIncome } }) => (
  <StyledCostListItem>
    <div>{new Date(date).toLocaleDateString()}</div>
    <div>{description}</div>
    <div>{category}</div>
    <div>{isIncome ? price : `-${price}`}</div>
  </StyledCostListItem>
);

CostListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
};
