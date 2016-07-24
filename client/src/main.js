import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import App from './containers/App';
import Landing from './containers/Landing';
import SupportStudent from './containers/SupportStudent';
import Profile from './containers/Profile';
import Donation from './containers/Donation';

import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk, routerMiddleware(hashHistory)),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="students-list" component={SupportStudent} />
        <Route path="profile/:id" component={Profile} />
        <Route path="donate/:id" component={Donation} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
);