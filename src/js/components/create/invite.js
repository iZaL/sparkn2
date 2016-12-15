import React, { Component } from 'react';
import Contacts from 'react-native-contacts';
import { View, ListView } from 'react-native';
import Router from '../../router';
import ContactRow from './contact-row';
import Button from '../common/Button';
import styles from '../../style';

export default class Invite extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor () {
    super();
    this.state = { dataSource: undefined };
  }

  componentWillMount () {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    Contacts.getAll((err, contacts) => {
      if (err && err.type === 'permissionDenied') {
        // x.x
      } else {
        this.setState({
          dataSource: ds.cloneWithRows(this.filterContacts(contacts))
        });
      }
    });
  }

  filterContacts (contacts) {
    return contacts.map((contact) => {
      const obj = {};
      obj.givenName = contact.givenName;
      obj.familyName = contact.familyName;
      obj.phoneNumber = contact.phoneNumbers.filter(number => number.label === 'mobile');
      return obj;
    }).filter(contact => contact.phoneNumber.length > 0);
  }

  nextPage () {
    this.props.navigator.push(Router.getRoute('confirm'));
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.dataSource &&
          <ListView
            dataSource={this.state.dataSource}
            renderRow={ ContactRow }
          />
        }

        <Button
          buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={ () => this.nextPage() }
        >
          Next
        </Button>
      </View>
    );
  }
}
