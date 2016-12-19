import Contacts from 'react-native-contacts';
import { store } from '../init-store';
import { setContacts } from '../actions/create';

export default function getContacts () {

  Contacts.getAll((err, data) => {
    if (err && err.type === 'permissionDenied') {
      // x.x
    } else {

      const contacts = data.map((contact) => {
        const obj = {};
        obj.firstname = contact.givenName;
        obj.surname = contact.familyName;
        obj.phone_number = contact.phoneNumbers.filter(number => number.label === 'mobile');
        obj.isSelected = false;
        return obj;
      }).filter((contact) => {
        return contact.phone_number.length > 0;
      }).map((contact) => {
        return Object.assign({}, contact, { phone_number: contact.phone_number[0].number });
      });
      console.log(contacts);
      store.dispatch(setContacts(contacts));
    }
  });
}
