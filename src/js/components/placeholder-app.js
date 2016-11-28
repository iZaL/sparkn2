import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import Router from '../Router';

// require('../scss/main.scss');
// require('../scss/font-awesome/font-awesome.scss');
//
//
// import { store } from './init-store.js';
//
// function initialiseAppState (nextState, replace, callback) {
//
//     // catch if user is not authenticated
//     // onEnter runs before requireAuthentication
//     if (!validCookieExists()) {
//
//         hashHistory.push('/');
//     } else {
//
//         if (!store.getState().user.id) {
//
//             store.dispatch(getUser());
//         }
//     }
//
//     callback();
// }
//
// function fetchCalendar (nextState, replace, callback) {
//
//     // catch if user is not authenticated
//     // onEnter runs before requireAuthentication
//     if (!validCookieExists()) {
//
//         hashHistory.push('/');
//     } else {
//
//         if (!store.getState().user.id) {
//
//             store.dispatch(getUser());
//         }
//         store.dispatch(getCalendar());
//     }
//
//     callback();
// }
//
// function fetchEvent (nextState, replace, callback) {
//     store.dispatch(resetEventState());
//     store.dispatch(getEvent(nextState.params.eventID));
//     callback();
// }
//
//
// function handleCreateEvent (nextState, replace, callback) {
//
//     if (!validCookieExists()) {
//         hashHistory.push('/');
//     } else {
//
//         if (!store.getState().user.id) {
//
//             store.dispatch(getUser());
//         }
//     }
//     store.dispatch(clearCreateEvent());
//     callback();
// }

class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
