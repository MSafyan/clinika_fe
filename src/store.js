import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import { createBrowserHistory } from 'history';

import {
	connectRouter,
	routerMiddleware,
	RouterState,
} from 'connected-react-router';

import rootReducer from './reducers';

const initialState = {};

export const history = createBrowserHistory();
const middleware = [routerMiddleware(history),thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export const persistor = persistStore(store);
