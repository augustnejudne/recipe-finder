import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import App from './components/App.js';
import Favorites from './components/Favorites.js';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers.js';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
