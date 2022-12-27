import './style.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import Cart from './containers/Cart';
import ProductDetails from './containers/ProductDetails';
import ProductList from './components/ProductList';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import TopBar from './components/TopBar';
import cartReducer from './store/reducers/cart';
import { render } from 'react-dom';

const rootReducer = combineReducers({
  cart: cartReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[MiddleWare] Dispatching', action);
      const result = next(action);
      console.log('[MiddleWare] next state', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// You can apply multiple middleware separated by ,
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, ReduxThunk))
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <TopBar />
          <div className="container">
            <Route exact path="/" component={ProductList} />
            <Route path="/products/:productId" component={ProductDetails} />
            <Route exact path="/checkout" component={Cart} />
          </div>
        </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
