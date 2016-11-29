import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/calendar/calendar.js';
import { applyFilter, clearFilter } from '../actions/calendar.js';
import filterNotifications from '../lib/filterNotifications.js';
import getPastEvents from '../lib/getPastEvents.js';
import { getEvent } from '../actions/event.js';
import jsonState from '../testState/jsonState.json';

const mapStateToProps = (state) => {

    let pastEvents = jsonState.calendar.data.filter(getPastEvents);
    let data = jsonState.calendar.data;
    let calendarIsFiltered = jsonState.calendar.filter;
    let isShowHosting = jsonState.calendar.showHosting;

    let filteredEvents = filterNotifications(pastEvents, calendarIsFiltered, isShowHosting);

    return {
        allEvents: data,
        filteredEvents,
        isFetching: jsonState.calendar.isFetching,
        calendarIsFiltered,
        isShowHosting
    };
};

const mapDispatchToProps = (dispatch) => {

    return {

        displaySome: (filterChoice) => {

            dispatch(applyFilter(filterChoice));
        },
        displayAll: () => {

            dispatch(clearFilter());
        }
    };
};


const AlbumsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar);

export default AlbumsContainer;
