import React, { Component } from 'react';
import { View, ListView, StyleSheet } from 'react-native';
import Router from '../../router';
import ContactRow from './contact-row';
import Button from '../common/Button';
import styles from '../../style';

const separatorStyles = { flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: '#8E8E8E' };

export default class Invite extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor () {
    super();
    this.state = { dataSource: undefined };
  }

  componentWillMount () {
    this.createDataSource(this.props._invitees);
  }

  createDataSource (contacts) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(contacts);
  }

  nextPage () {
    this.props.navigator.push(Router.getRoute('confirm'));
  }

  render () {

    const { toggleContact } = this.props;

    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        {
          this.dataSource &&
          <ListView
            dataSource={this.dataSource}
            renderRow={ (data, sectionID, rowID) => <ContactRow toggleContact={toggleContact} data={data} rowID={rowID} sectionID={sectionID} /> }
            renderSeparator={(sectionId, rowId) => <View key={rowId} style={ separatorStyles } />}
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
