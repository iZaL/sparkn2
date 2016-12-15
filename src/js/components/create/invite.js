import React, { Component } from 'react';
import Contacts from 'react-native-contacts';
import { View, ListView, Text } from 'react-native';
import Router from '../../router';
import Button from '../common/Button';
import styles from '../../style';

export default class Invite extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['contact1', 'cinctact 2', 'contact1', 'cinctact 2',
        'contact1', 'cinctact 2', 'contact1', 'cinctact 2',
        'contact1', 'cinctact 2', 'contact1', 'cinctact 2', 'contact1', 'cinctact 2', 'contact1', 'cinctact 2'
      ])
    };
  }
  componentWillMount () {
    Contacts.getAll((err, contacts) => {
      if (err && err.type === 'permissionDenied') {
        // x.x
      } else {
        console.log(contacts);
      }
    });
  }

  nextPage () {
    this.props.navigator.push(Router.getRoute('confirm'));
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text>{rowData}</Text>}
        />
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
