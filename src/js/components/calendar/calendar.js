import React from 'react';
import { View, Text } from 'react-native';
import TopBar from '../event/top-bar.js';
import CalendarItem from './calendar-item.js';
import FilterPanel from '../general/filter-panel.js';
import Spinner from '../common/Spinner.js';
import getUserID from '../../lib/getUserID.js';

const Calendar = ({ location, allEvents, filteredEvents, isFetching, fetchEvent, displaySome, displayAll, calendarIsFiltered, isShowHosting }) => {

    let sortedData = filteredEvents.sort((a, b) => {
        a = a.eventWhen[0].date;
        b = b.eventWhen[0].date;

        return new Date(a).getTime() > new Date(b).getTime();
    });
    console.log(this.props);
    const currentScene = 'calendar';

    return (

        <View>

            <View className="container calendar">
              {
                  isFetching && <Spinner />
              }
              {
                  !isFetching && allEvents.length > 0 && <FilterPanel displaySome={ displaySome }
                                                                      displayAll={ displayAll }
                                                                      dataIsFiltered={ calendarIsFiltered }
                                                                      isShowHosting={ isShowHosting } />
              }
              {
                  sortedData.length === 0 && !isFetching &&
                      <Text className="no-events-message">
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

            <View className="container calendar">
                {
                    isFetching && <Spinner />
                }
                {
                    !isFetching && allEvents.length > 0 && <FilterPanel displaySome={ displaySome }
                                                                        displayAll={ displayAll }
                                                                        dataIsFiltered={ calendarIsFiltered }
                                                                        isShowHosting={ isShowHosting } />
                }
                {
                    sortedData.length === 0 && !isFetching &&
                        <Text className="no-events-message">
                            You have no { currentScene.includes('album') ? "past" : "upcoming" } events.
                        </Text>
                }
                {
                    !isFetching && sortedData.map((item, i) => {

                        return <CalendarItem key={ i }
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
        </View>
    );
};

export default Calendar;
