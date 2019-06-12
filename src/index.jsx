import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import { I18nextProvider } from 'react-i18next';

import App from './App';
import i18n from './i18n';

// Init VK App
connect.send('VKWebAppInit', {});

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root'),
);
