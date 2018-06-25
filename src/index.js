import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import App from './App';
import configureStore from './store/configureStore';
import history from './history';

const baseStyles = () => injectGlobal`
  ${styledNormalize}
  
  #root {
    height: 100vh;
  }
`;

const store = configureStore();
window.store = store;

const rootEl = document.getElementById('root');

const render = (Component) => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    rootEl,
  );
};

render(App);

if (module.hot) {
  module.hot.accept();
}
