import { database } from 'configFirebase';
import { createAction } from 'redux-actions';
import { List, Map } from 'immutable';

export const dbActions = {
  GET_DB_ITEMS_REQUEST: createAction('get_db_items_request'),
  GET_DB_ITEMS_SUCCESS: createAction('get_db_items_success'),
  GET_DB_CATEGORY_REQUEST: createAction('get_db_category_request'),
  GET_DB_CATEGORY_SUCCESS: createAction('get_db_category_success'),
};


export const getItems = (id) => (dispatch) => {
  dispatch(dbActions.GET_DB_ITEMS_REQUEST(List()));
  const starCountRef = database.ref(`items/${id}`);
  return starCountRef.on('value', (snapshot) => {
    const items = [];
    snapshot.forEach((item) => {
      items.push(item.val());
    });
    dispatch(dbActions.GET_DB_ITEMS_SUCCESS(List(items)));
  });
};

export const getCategories = (id) => (dispatch) => {
  dispatch(dbActions.GET_DB_CATEGORY_REQUEST(List()));

  const starCountRef = database.ref(`categories/${id}`);
  return starCountRef.on('value', (snapshot) => {
    const items = [];
    snapshot.forEach((item) => {
      items.push(Map({ label: item.val().label, value: item.val().value }));
    });
    dispatch(dbActions.GET_DB_CATEGORY_SUCCESS(List(items)));
  });
};
