import { Actions } from 'react-native-router-flux';
import { store } from '../init-store.js';

const HOME_URL = 'http://localhost:9000';

export default function getUserID () {

      const storedcookie = store.getState().auth.cookie;
      const cookie = storedcookie.replace("{", "").replace(/\"/g, "").replace("}", "");

      if (!cookie.match(/sparkID:\d+/)) {

          console.error('User session cookie not found.');
          Actions.login({ type: 'reset' });
      } else {
          const result = cookie.match(/\d+/)[0].match(/\d+/);
          console.log('result' + result[0]);
          return result[0];
      }

}
