import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Notification from './notification.js';
import getUserID from '../lib/getUserID.js';
import TopBar from './event/top-bar.js';
import FilterPanel from './general/filter-panel.js';
import { Button, Spinner } from './common';
import Navbar from './general/navbar.js';
import styles from '../style.js';

const Feed = ({ sceneKey, allEvents, notifications, isFetching, handleUpdateNotification, displaySome, displayAll, feedIsFiltered, isShowHosting }) => {

    const { navbarContainerStyle } = styles;

    let mappedNotifications = notifications.map((data, i) => {
        return (
            <Notification
                key={ i }
                index={ i }
                viewed={ data.viewed }
                eventID={ data.eventID }
                timestamp={ data.timestamp }
                isPoll={ data.isPoll }
                firstName={ data.firstName }
                lastName={ data.lastName }
                photoURL={ data.photoURL }
                eventWhat={ data.eventWhat }
                eventWhere={ data.eventWhere }
                eventWhen={ data.eventWhen }
                userIsHost={ data.hostID == getUserID() }
                hostID={ data.hostID }
                subjectID={ data.subjectID }
                handleUpdateNotification={ handleUpdateNotification }
                inviteesNumber={ data.inviteesNumber }
                eventName={ data.eventName }
                hasEdited={ data.hasEdited } />
        );
    });
    console.log('About to Return Feed');
    console.log('sceneKey = ' + sceneKey);
    return (
      <View>

      {
          isFetching && <Spinner />
      }
      {
          !isFetching &&
          <View>
            <TopBar location={sceneKey} />
          </View>
      }
          <View style={styles.containerFeed}>
          {
            !isFetching && allEvents.length > 0 &&
                <FilterPanel displayAll={ displayAll }
                             displaySome={ displaySome }
                             dataIsFiltered={ feedIsFiltered }
                             isShowHosting={ isShowHosting } />
          }
          {
              allEvents.length === 0 && !isFetching &&
                  <Text style={styles.smallMessageText}>
                      You have no events.
                      (Why not create some?)
                  </Text>
          }
          {
              notifications.length === 0 && isShowHosting &&
                  <Text style={styles.smallMessageText}>
                      You are not hosting any events.
                      (Why not create some?)
                  </Text>
          }
          {
              notifications.length === 0 && isShowHosting === false &&
                  <Text style={styles.smallMessageText}>
                      You have not been invited to any events.
                  </Text>
          }
          {
              !isFetching && mappedNotifications
            }
            </View>

      </View>

    );
};

export default Feed;
