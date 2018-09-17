import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { CostListItem } from '../Item/CostListItem';
import { StyledCostList } from './StyledCostList';

export const CostList = ({ list }) => (
  <StyledCostList>
    {list.map((item) => (<CostListItem item={item} key={item.id} />))}
  </StyledCostList>
);

CostList.propTypes = {
  list: PropTypes.instanceOf(List).isRequired,
};
