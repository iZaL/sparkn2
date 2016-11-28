import CookieManager from 'react-native-cookies';

const HOME_URL = 'http://localhost:9000';

export default function validCookieExists () {
    console.log('called Valid Cookie Exists');
    CookieManager.get(HOME_URL, (err, res) => {
      if (err) {
        console.log('error' + err);
      } else {
        const cookie = JSON.stringify(res);
        console.log(cookie);
        console.log(cookie.includes("sparkID"));
        if (cookie.includes("sparkID")) {
          return true;
        } else {
          return false;
        }
      }
    });
}
