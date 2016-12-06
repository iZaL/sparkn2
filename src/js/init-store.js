import { createStore, applyMiddleware, compose } from 'redux';
import { createNavigationEnabledStore } from '@exponent/ex-navigation';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

// export function initStore (initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     compose(
//       applyMiddleware(thunkMiddleware)
//       // window.devToolsExtension ? window.devToolsExtension() : f => f
//     )
//   );
// }

const createStoreWithNavigation = createNavigationEnabledStore({
  createStore,
  navigationStateKey: 'navigation'
});

export function initStore (initialState) {

  return createStoreWithNavigation(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware)
    )
  );
}

export const store = initStore();
