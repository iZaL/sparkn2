import React, { Component } from 'react';
import Contacts from 'react-native-contacts';
import { Provider } from 'react-redux';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from '@exponent/ex-navigation';
import { store } from './init-store';
import { setContacts } from './actions/create';
import Router from './router';

// disable remote debugger warning in a simulator
console.disableYellowBox = true;

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
    store.dispatch(setContacts(contacts));
  }
});

const navigationContext = new NavigationContext({
  router: Router,
  store
});

class App extends Component {

  cancelEvent () {
    this.props.discardEvent();
  }
  render () {
    return (
      <Provider store={ store }>
        <NavigationProvider context={ navigationContext }>
          <StackNavigation initialRoute={ Router.getRoute('auth') } />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App;
