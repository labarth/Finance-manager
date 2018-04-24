import { Record } from 'immutable';
import { handleActions } from 'redux-actions';
import { dbActions } from 'redux/actions/dbActions';

const ItemsSchema = Record({
  loading: false,
  items: [],
});

const initialState = new ItemsSchema();

const getDbItemsRequest = (state = initialState, { payload }) => state
  .set('loading', true)
  .set('items', payload);

const getDbItemsSuccess = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('items', payload);

export const db = handleActions({
  [dbActions.GET_DB_ITEMS_REQUEST]: getDbItemsRequest,
  [dbActions.GET_DB_ITEMS_SUCCESS]: getDbItemsSuccess,
}, initialState);
