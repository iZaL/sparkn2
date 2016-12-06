import CookieManager from 'react-native-cookies';

const HOME_URL = 'http://localhost:9000';

export default function validCookieExists () {

  CookieManager.get(HOME_URL, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      const cookie = JSON.stringify(res);

      return cookie.includes('sparkID');
    }
  });
}
