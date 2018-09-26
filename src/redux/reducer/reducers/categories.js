import { Record, List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { categoryActions } from 'redux/actions/categoryActions';

const initialList = List([
  Map({ label: 'Дом', value: 'Дом' }),
  Map({ label: 'Еда', value: 'Еда' }),
  Map({ label: 'Авто', value: 'Авто' }),
]);

const ItemsSchema = Record({
  list: initialList,
  loading: false,
});

const initialState = new ItemsSchema();

const getDbCategoriesRequest = (state = initialState) => state
  .set('loading', true);

const getDbCategoriesSuccess = (state = initialState, { payload }) => {
  if (payload.size) {
    return state.set('loading', false).set('list', payload);
  }
  return state.set('loading', false).set('list', initialList);
};

export const categories = handleActions({
  [categoryActions.GET_DB_CATEGORY_REQUEST]: getDbCategoriesRequest,
  [categoryActions.GET_DB_CATEGORY_SUCCESS]: getDbCategoriesSuccess,
}, initialState);
