import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  // Add reducers here
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
