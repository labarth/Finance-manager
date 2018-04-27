import { handleActions } from 'redux-actions';
import v4 from 'uuid';
import { List, Map } from 'immutable';

const initialState = List([
  Map({ label: 'Дом', value: v4() }),
  Map({ label: 'Еда', value: v4() }),
  Map({ label: 'Авто', value: v4() }),
]);

export const categories = handleActions({}, initialState);
