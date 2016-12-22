import React from 'react';
import { Linking, View, ScrollView } from 'react-native';
// import Router from '../../router';
import ConfirmEventWhat from './confirm-what';
import ConfirmEventWhere from './confirm-where';
import ConfirmEventWhen from './confirm-when';
import styles from '../../../styles';
import Button from '../common/Button';

export default function Confirm ({ data, saveEvent, navigation }) { // eslint-disable-line
  const url = 'whatsapp://send?text=Hello%2C%20World!';
  // const nextPage = () => {
  //   navigation.performAction(({ tabs, stacks }) => {
  //     tabs('main').jumpToTab('feed');
  //     stacks('confirm').immediatelyResetStack([Router.getRoute('feed')], 0);
  //   });
  // };

  const handleOpen = () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  };

  return (
    <View>
      <ScrollView>
        <View>
          <ConfirmEventWhat eventWhat={ data.eventWhat } />
          <ConfirmEventWhere eventWhere={ data.eventWhere } />
          <ConfirmEventWhen eventWhen={ data.eventWhen } />
          <View style={styles.rowCentered}>
            <Button
              buttonStyle={styles.confirmButton}
              textStyle={styles.confirmButtonText}
              onPress={ handleOpen }
            > Invite Friends
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
