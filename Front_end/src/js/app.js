import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './../containers/App/AppContainer';

import 'bootstrap/dist/css/bootstrap.css'

import {hashHistory} from 'react-router';
import makeRoutes from './../routes';

const routes = makeRoutes();

ReactDOM.render(
  <AppContainer history={hashHistory}
        routes={routes}/>,
  document.getElementById('app')
);
