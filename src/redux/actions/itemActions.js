import { database } from 'configFirebase';
import { createAction } from 'redux-actions';
import { List } from 'immutable';

export const itemActions = {
  GET_DB_ITEMS_REQUEST: createAction('get_db_items_request'),
  GET_DB_ITEMS_SUCCESS: createAction('get_db_items_success'),
};

export const getItems = (id) => (dispatch) => {
  dispatch(itemActions.GET_DB_ITEMS_REQUEST(List()));
  const itemsRef = database.ref(`items/${id}`);
  return itemsRef.on('value', (snapshot) => {
    const items = [];
    snapshot.forEach((item) => {
      items.push(item.val());
    });
    dispatch(itemActions.GET_DB_ITEMS_SUCCESS(List(items)));
  });
};
