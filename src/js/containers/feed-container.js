import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/feed.js';
import { applyFilter, clearFilter } from '../actions/notifications.js';
import { updateNotification } from '../actions/event.js';
import { listenForUserID } from '../lib/action-listeners.js';
import filterNotifications from '../lib/filterNotifications.js';
import { store } from '../init-store.js';
import jsonState from '../testState/jsonState.json';

const mapStateToProps = (state) => {

    let data = jsonState.notifications.data;
    let feedIsFiltered = jsonState.notifications.filter;
    let isShowHosting = jsonState.notifications.showHosting;
    let notifications = filterNotifications(data, feedIsFiltered, isShowHosting);

    return {
        allEvents: data,
        user: jsonState.user,
        notifications,
        isFetching: jsonState.notifications.isFetching,
        updateNotification: jsonState.event.updateNotification,
        feedIsFiltered,
        isShowHosting
    };
};
const mapDispatchToProps = (dispatch) => {

    return {
        handleUpdateNotification: (index) => {

            dispatch(updateNotification(index));
        },
        displaySome: (filterChoice) => {

            dispatch(applyFilter(filterChoice));
        },
        displayAll: () => {

            dispatch(clearFilter());
        }
    };
};


const FeedContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);

export default FeedContainer;
