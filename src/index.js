import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '@components/App';
import store from './store/configureStore';

const app = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);
