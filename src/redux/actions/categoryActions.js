import { database } from 'configFirebase';
import { createAction } from 'redux-actions';
import { List, Map } from 'immutable';

export const categoryActions = {
  GET_DB_CATEGORY_REQUEST: createAction('get_db_category_request'),
  GET_DB_CATEGORY_SUCCESS: createAction('get_db_category_success'),
};

export const getCategories = (id) => (dispatch) => {
  dispatch(categoryActions.GET_DB_CATEGORY_REQUEST(List()));

  const starCountRef = database.ref(`categories/${id}`);
  return starCountRef.on('value', (snapshot) => {
    const items = [];
    snapshot.forEach((item) => {
      items.push(Map({ label: item.val().label, value: item.val().value }));
    });
    dispatch(categoryActions.GET_DB_CATEGORY_SUCCESS(List(items)));
  });
};
