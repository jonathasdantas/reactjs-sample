import React from 'react';
import ReactDOM from 'react-dom';

import Main from './main/Main';

import { Router, Route, hashHistory } from 'react-router';

/* Starting Point of the App */
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Main} />
    </Router>
    ),
    document.getElementById('app')
);
