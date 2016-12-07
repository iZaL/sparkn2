import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import Router from '../../router';
import ConfirmEventWhat from './confirm-what';
import ConfirmEventWhere from './confirm-where';
import ConfirmEventWhen from './confirm-when';
import { isPoll } from '../../lib/create-event-helpers';
import styles from '../../style';
import Button from '../common/Button';

export default function Confirm ({ data, saveEvent, navigation }) { // eslint-disable-line

  const SaveButtonIsHidden = data.eventWhen[0].date === '' && isPoll(data) === false;
  const SaveButtonText = isPoll(data) ? 'SEND POLL' : 'CONFIRM & SEND INVITES';

  const nextPage = () => {
    navigation.performAction(({ tabs, stacks }) => {
      tabs('main').jumpToTab('feed');
      stacks('confirm').immediatelyResetStack([Router.getRoute('feed')], 0);
    });
  };

  const invitedFriends = data.invitees.map((inviteeObject) => {
    return (
      <View
        key={ inviteeObject.id }
        style={styles.inviteeItem}
      >

        <Image
          style={styles.uiAvatarImage}
          source={{ uri: inviteeObject.photoURL }}
        />

        <Text style={styles.msg2}>
          { inviteeObject.firstName }
        </Text>

      </View>
    );
  });

  return (
    <View>
      <ScrollView>
        <View>
          <ConfirmEventWhat eventWhat={ data.eventWhat } />
          <ConfirmEventWhere eventWhere={ data.eventWhere } />

          { (!SaveButtonIsHidden) &&
            <View />
          }
          { (SaveButtonIsHidden) &&
            <View>
              <Text>You need to enter a date before saving this event.</Text>

              <Button
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                onPress={ () => console.log('add validation to date')}
              >
                Add a Date
              </Button>

            </View>
          }

          <ConfirmEventWhen eventWhen={ data.eventWhen } />

          <Text style={styles.invitedTitle}>
            Invited friends
          </Text>


          <View style={styles.invitedWrapped}>
            { invitedFriends }
          </View>


          { (SaveButtonIsHidden) &&
            <View />
          }
          { (!SaveButtonIsHidden) &&
            <View style={styles.rowCentered}>
              <Button
                buttonStyle={styles.confirmButton}
                textStyle={styles.confirmButtonText}
                onPress={ () => nextPage() }
              >
                { SaveButtonText }
              </Button>
            </View>
          }

        </View>
      </ScrollView>
    </View>
  );
}
