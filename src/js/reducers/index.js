import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import calendar from './calendar';
import event from './event';
import notifications from './notifications';
import createEvent from './create-event';
import photos from './photos';


export default combineReducers({
  auth,
  user,
  calendar,
  event,
  notifications,
  createEvent,
  photos
});
