import { Record, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { dbActions } from 'redux/actions/dbActions';

const ItemsSchema = Record({
  loading: false,
  items: List(),
  categories: List([
    Map({ label: 'Дом', value: 'Дом' }),
    Map({ label: 'Еда', value: 'Еда' }),
    Map({ label: 'Авто', value: 'Авто' }),
  ]),
});

const initialState = new ItemsSchema();

const getDbItemsRequest = (state = initialState, { payload }) => state
  .set('loading', true)
  .set('items', payload);

const getDbItemsSuccess = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('items', payload);

const getDbCategoriesRequest = (state = initialState, { payload }) => state
  .set('loading', true)
  .set('categories', payload);

const getDbCategoriesSuccess = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('categories', payload);

export const db = handleActions({
  [dbActions.GET_DB_ITEMS_REQUEST]: getDbItemsRequest,
  [dbActions.GET_DB_ITEMS_SUCCESS]: getDbItemsSuccess,
  [dbActions.GET_DB_CATEGORY_REQUEST]: getDbCategoriesRequest,
  [dbActions.GET_DB_CATEGORY_SUCCESS]: getDbCategoriesSuccess,
}, initialState);
