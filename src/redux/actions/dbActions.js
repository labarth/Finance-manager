import { database } from 'configFirebase';
import { createAction } from 'redux-actions';
import { List } from 'immutable';


export const dbActions = {
  GET_DB_ITEMS_REQUEST: createAction('get_db_items_request'),
  GET_DB_ITEMS_SUCCESS: createAction('get_db_items_success'),
};


export const getItems = id => (dispatch) => {
  dispatch(dbActions.GET_DB_ITEMS_REQUEST);
  const starCountRef = database.ref(`items/${id}`);
  return starCountRef.on('value', (snapshot) => {
    const items = [];
    snapshot.forEach((item) => {
      items.push(item.val());
    });
    dispatch(dbActions.GET_DB_ITEMS_SUCCESS(List(items)));
  });
};
