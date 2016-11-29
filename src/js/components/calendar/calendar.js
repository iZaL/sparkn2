import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CalendarItem from './calendar-item.js';
import FilterPanel from '../general/filter-panel.js';
import Spinner from '../common/Spinner.js';
import getUserID from '../../lib/getUserID.js';
import styles from '../../style.js';

const Calendar = ({ location, allEvents, filteredEvents, isFetching, fetchEvent, displaySome, displayAll, calendarIsFiltered, isShowHosting }) => {

    let sortedData = filteredEvents.sort((a, b) => {
        a = a.eventWhen[0].date;
        b = b.eventWhen[0].date;

        return new Date(a).getTime() > new Date(b).getTime();
    });

    return (

        <View>
              {
                  isFetching && <Spinner />
              }

              <View style={styles.filterPanelContainer}>
                {
                    !isFetching && allEvents.length > 0 && <FilterPanel displaySome={ displaySome }
                                                                        displayAll={ displayAll }
                                                                        dataIsFiltered={ calendarIsFiltered }
                                                                        isShowHosting={ isShowHosting } />
                }
              </View>

              <ScrollView>
                <View style={styles.containerFeed}>
                {
                    sortedData.length === 0 && !isFetching &&
                        <Text style={styles.smallMessageText}>
                            You have no { currentScene.includes('album') ? "past" : "upcoming" } events.
                        </Text>
                }
                {
                    !isFetching && sortedData.map((item, i) => {

                        return <CalendarItem key={ 1 }
                                             userIsHost={ item.hostID === getUserID() }
                                             RSVPstatus={ item.RSVP }
                                             eventName={ item.eventName }
                                             eventWhat={ item.eventWhat }
                                             eventWhere={ item.eventWhere }
                                             eventWhen={ item.eventWhen }
                                             coverPhoto={ item.coverPhoto }
                                             eventID={ item.eventID } />;
                    })
                }
                </View>
              </ScrollView>

        </View>
    );
};

export default Calendar;
