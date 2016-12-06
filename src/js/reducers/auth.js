// import update from 'react-addons-update';
// import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, GET_COOKIE_SUCCESS } from '../actions/auth.js';
//
// const initialState = {
//     isAuthenticated: false,
//     isFetching: undefined,
//     cookie: null
// };
//
// export default function auth (state = initialState, action) {
//     console.log({ action });
//     switch (action.type) {
//
//     case USER_LOGIN_REQUEST:
//         return handleUserLogin(state, action);
//
//     case USER_LOGIN_SUCCESS:
//         return handleUserLoginSuccess(state, action);
//
//     case GET_COOKIE_SUCCESS:
//         return handleGetCookieSuccess(state, action);
//
//     default:
//         return state;
//     }
// }
//
// function handleUserLogin (state, action) {
//     console.log('handleUserLogin');
//     return update(state, {
//         isFetching: { $set: action.isFetching },
//         isAuthenticated: { $set: action.isAuthenticated }
//     });
// }
//
// function handleUserLoginSuccess (state, action) {
//     console.log('handleUserLoginSuccess');
//     return update(state, {
//         isFetching: { $set: action.isFetching },
//         isAuthenticated: { $set: true }
//     });
// }
//
// function handleGetCookieSuccess (state, action) {
//     console.log('handleGetCookieSuccess');
//     return update(state, {
//         cookie: { $set: action.payload }
//     });
// }
