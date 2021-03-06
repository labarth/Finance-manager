import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import history from '../history';
import rootReducer from '../redux/reducer';

export default function configureStore() {
  const enhancer = applyMiddleware(routerMiddleware(history), thunk, logger);

  const store = createStore(
    rootReducer,
    composeWithDevTools(enhancer),
  );

  if (module.hot) {
    module.hot.accept('../redux/reducer', () => {
      const nextRootReducer = require('../redux/reducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
