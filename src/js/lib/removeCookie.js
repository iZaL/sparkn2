import CookieManager from 'react-native-cookies';

export default function removeCookie () {

  // document.cookie = "sparkID=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  CookieManager.clearAll((err, res) => {
    console.log(err);
    console.log(res);
  });
}
