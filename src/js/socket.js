import io from 'socket.io-client';
import getUserID from './lib/getUserID';
import { store } from './init-store';
import { getNotifications } from './actions/notifications';

const port = process.env.PORT || 9000;
let currentLocation = '';

if (process.env.DEVELOPMENT) {
  currentLocation = `${location.protocol}//${location.hostname}:${port}`; // eslint-disable-line no-undef
}

const feedSocket = io(`${currentLocation}/feed`);

feedSocket.on('connected', () => {

  const userID = getUserID();

  if (userID) {

    feedSocket.emit('join', JSON.stringify([userID]));
    store.dispatch(getNotifications(userID));
  }
});

export default feedSocket;
