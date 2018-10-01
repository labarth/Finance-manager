import { Record, List } from 'immutable';
import { handleActions } from 'redux-actions';
import { itemActions } from 'redux/actions/itemActions';

const ItemsSchema = Record({
  list: List(),
  loading: false,
});

const initialState = new ItemsSchema();

const getDbItemsRequest = (state = initialState) => state
  .set('loading', true);

const getDbItemsSuccess = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('list', payload);

export const costList = handleActions({
  [itemActions.GET_DB_ITEMS_REQUEST]: getDbItemsRequest,
  [itemActions.GET_DB_ITEMS_SUCCESS]: getDbItemsSuccess,
}, initialState);
