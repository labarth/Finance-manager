import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import App from './App';
import configureStore from './store/configureStore';

const baseStyles = () => injectGlobal`
  ${styledNormalize}
`;

const store = configureStore();
window.store = store;

const rootEl = document.getElementById('root');

const render = (Component) => {
  baseStyles();
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    rootEl,
  );
};

render(App);

if (module.hot) {
  module.hot.accept();
}
