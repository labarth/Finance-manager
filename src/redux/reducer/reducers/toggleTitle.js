import { handleAction } from 'redux-actions';
import toggleTitleAction from '../../actions/toggleTitle';

const initialState = 'undefined title';

const toggleTitleReducer = (state = initialState, { payload }) => (payload || state);


export default handleAction(toggleTitleAction, toggleTitleReducer, initialState);
