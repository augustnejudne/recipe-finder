import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

import App from './components/App.js';
import Favorites from './components/Favorites.js';


import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers.js';
import ReduxThunk from 'redux-thunk';

// const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
store.subscribe(() => console.log(store.getState()));

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
