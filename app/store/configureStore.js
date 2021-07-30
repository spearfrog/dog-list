import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import { isClient, isDebug } from '../../config/app';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function configureStore(initialState) {
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [thunk];
  let store;
  if (isClient && isDebug) {
    console.log('isClient? HEREEEEEhere')

    middleware.push(createLogger());
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));
  } else {
    console.log('else HEREEEEEhere')

    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));
  }
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('../reducers');
      console.log('HEREEEEEhere')
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
