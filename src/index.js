import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as Toastr from 'toastr';
import App from './routes/AppRouter';
import store from './store/configureStore';
import './index.css'
import '../node_modules/toastr/build/toastr.css';
Toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: 'toast-top-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};

const app = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  app,
);
