import { Record, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { categoryActions } from 'redux/actions/categoryActions';

const ItemsSchema = Record({
  list: List([
    Map({ label: 'Дом', value: 'Дом' }),
    Map({ label: 'Еда', value: 'Еда' }),
    Map({ label: 'Авто', value: 'Авто' }),
  ]),
  loading: false,
});

const initialState = new ItemsSchema();

const getDbCategoriesRequest = (state = initialState, { payload }) => state
  .set('loading', true)
  .set('list', payload);

const getDbCategoriesSuccess = (state = initialState, { payload }) => state
  .set('loading', false)
  .set('list', payload);

export const categories = handleActions({
  [categoryActions.GET_DB_CATEGORY_REQUEST]: getDbCategoriesRequest,
  [categoryActions.GET_DB_CATEGORY_SUCCESS]: getDbCategoriesSuccess,
}, initialState);
