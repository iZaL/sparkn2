import { uploadPhoto } from '../actions/photos';
// import { getNotifications } from '../actions/notifications';
// import { store } from '../init-store';
// import getUserID from './getUserID';


export default function listenForS3URL (store) {
  const unsubscribe = store.subscribe(listener);

  function listener () {
    const status = store.getState().photos.signedURL;

    if (status) {
      unsubscribe();
      const file = store.getState().photos.file;
      const url = store.getState().photos.signedURL;
      store.dispatch(uploadPhoto(url, file));
    }
  }
}

// export function listenForUserID (store) {
//
//     let unsubscribe = store.subscribe(listener);
//
//     function listener () {
//
//         let userID = store.getState().user.id;
//
//         if (userID) {
//             console.log('I am in listren for user id', userID);
//             unsubscribe();
//             // store.dispatch(getNotifications(userID));
//         }
//     }
// }
