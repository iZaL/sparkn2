import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import formatDate from '../../lib/formatDate.js';
import { Button, CardSection, Card } from '../common';

/***
CalendarItem is used in calendar and album views.  Plays equivalent role to Notification.jsx for feed view
***/

const CalendarItem = ({ eventName, eventWhat, eventWhere, eventWhen,
    eventID, coverPhoto, RSVPstatus, userIsHost }) => {

      //need to add onPress handler for Button.

      return (
          <Card style={styles.cardStyle}>
            <CardSection style={styles.cardSectionStyle}>
              <TouchableOpacity style={styles.cardButtonStyle}>

                  <View style={styles.leftColumn}>

                    <View style={styles.cardTopRow}>

                      <View>

                        {(userIsHost || RSVPstatus === 'going') &&
                            <Icon name="check-circle" size={20} color="green" />
                        }
                        {!userIsHost && RSVPstatus === 'maybe' &&
                            <Icon name="question-circle" size={20} color="orange" />
                        }
                        {!userIsHost && RSVPstatus === 'notGoing' &&
                            <Icon name="times-circle" size={20} color="red" />
                        }
                        {!userIsHost && RSVPstatus === null &&
                            <Icon name="exclamation-circle" size={20} color="gray" />
                        }

                      </View>


                      <Text style={styles.calendarTitle}>
                        { eventName }
                      </Text>

                    </View>

                    <View style={styles.cardMiddleRow}>

                      <Text style={styles.date}>
                        { ` ${formatDate(eventWhen[0].date).toUpperCase() || 'TBC'}` }
                      </Text>

                      <Text style={styles.placeName}>
                        { ` ${eventWhere[0].placeName || 'TBC'} ${eventWhere[0].placeAddress}` }
                      </Text>

                    </View>

                  </View>

                  <View style={styles.rightColumnCalendar}>

                    <Image
                      style={styles.coverImage}
                      source={coverPhoto ? coverPhoto.photoURL : require('../../../img/placeholder.png')}
                    />

                  </View>

              </TouchableOpacity>
            </CardSection>
          </Card>

    );
};

const styles = {
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    maxHeight: 100
  },
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    flex: 1
  },
  cardButtonStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'pink'
  },
  rightColumnCalendar: {
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  cardTopRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  cardMiddleRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green'
  },
  date: {

  },
  placeName: {

  },
  profileImage: {

  },
  calendarItem: {

  },
  calendarTitle: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 3
  },
  coverImage: {
    flex: 1,
    height: 74,
    width: 100
  }
};

export default CalendarItem;
