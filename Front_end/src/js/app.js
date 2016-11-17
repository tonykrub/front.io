import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css'

import {hashHistory} from 'react-router';
import routes from './../routes';

ReactDOM.render(
  <App history={hashHistory}
        routes={routes}/>,
  document.getElementById('app')
);
