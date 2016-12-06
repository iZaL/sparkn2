import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ConfirmEventWhat from './confirmation/confirm-event-what';
import ConfirmEventWhere from './confirmation/confirm-event-where';
import ConfirmEventWhen from './confirmation/confirm-event-when';
import { isPoll } from '../../lib/create-event-helpers';
import TopBar from '../event/top-bar';
import styles from '../../style';
import Button from '../common/Button';

const ConfirmNewEvent = ({ data, saveEvent }) => { // eslint-disable-line react/prop-types
  const SaveButtonIsHidden = data.eventWhen[0].date === '' && isPoll(data) === false;
  const SaveButtonText = isPoll(data) === true ? 'SEND POLL' : 'CONFIRM & SEND INVITES';

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
      <TopBar location="confirm" />
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
                onPress={Actions.when}
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
                onPress={ e => saveEvent(data) }
              >
                { SaveButtonText }
              </Button>
            </View>
          }

        </View>
      </ScrollView>
    </View>
  );
};

export default ConfirmNewEvent;
