import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Scene,
  Reducer,
  Router,
  Actions,
  ActionConst, } from 'react-native-router-flux';
import styles from './style';
import TabIcon from './components/common/tab-bar/TabIcon';
//import validCookieExists from './lib/validCookieExists.js';
//import { getUser } from './actions/user.js';
//import { getEvent, resetEventState } from './actions/event.js';
//import { getNotifications } from './actions/notifications.js';
//import { getCalendar } from './actions/calendar.js';
//import { clearCreateEvent } from './actions/create-event.js';
import { store } from './init-store.js';
import LoginContainer from './containers/login-container.js';
import loginWithFacebook from './components/fbook-web-login.js';
import loggedIn from './components/loggedin.js';
import FeedContainer from './containers/feed-container.js';
import CalendarContainer from './containers/calendar-container.js';
import AlbumsContainer from './containers/albums-container.js';
import ProfileContainer from './containers/profile-container.js';
import CreateEventContainer from './containers/create-event/create-event-container.js';
//import EventContainer from './containers/event-container.js';
//import EditEventContainer from './containers/edit-event-container.js';
//import EventDetailsContainer from './containers/create-event/event-details-container.js';
//import EventWhatContainer from './containers/create-event/event-what-container.js';
//import EventWhereContainer from './containers/create-event/event-where-container.js';
import EventWhenContainer from './containers/create-event/event-when-container.js';
//import EventWhenContainer from './components/create-event/event-when.js';
//import ConfirmNewEventContainer from './containers/create-event/confirm-new-event-container.js';
import InviteFriendsContainer from './containers/create-event/invite-friends-container.js';
//import Test from './components/test.js';

function initialiseAppState (nextState, replace, callback) {
    // catch if user is not authenticated
    //if (!validCookieExists()) {
        Actions.login();
    //} else {
      //  if (!store.getState().user.id) {
          //  store.dispatch(getUser());
        //}
    //}
    callback();
}

function fetchCalendar (nextState, replace, callback) {

    // catch if user is not authenticated
    // onEnter runs before requireAuthentication
    //if (!validCookieExists()) {

        Actions.calendar();
    //} else {

    //    if (!store.getState().user.id) {

    //        store.dispatch(getUser());
    //    }
    //    store.dispatch(getCalendar());
    //}

    callback();
}

function fetchEvent (nextState, replace, callback) {
    store.dispatch(resetEventState());
    store.dispatch(getEvent(nextState.params.eventID));
    callback();
}


function handleCreateEvent (nextState, replace, callback) {

    //if (!validCookieExists()) {
        Actions.login();
    //} else {

    //    if (!store.getState().user.id) {

      //      store.dispatch(getUser());
      //  }
    //}
    store.dispatch(clearCreateEvent());
    callback();
}

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

//define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
    paddingTop: 65
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class Index extends Component {

  render() {

    return (

      <Provider store={store} >
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="login" component={LoginContainer} title="Login" initial />
            <Scene key="facebooklogin" component={ loginWithFacebook } title="Facebook Login" />
            <Scene key="loggedin" component={loggedIn} title="Logged In" />

            <Scene key="tabbar" initial >
              <Scene
                  key="main"
                  tabs
                  tabBarStyle={styles.tabBarStyle}
                  tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >
                <Scene
                  key="albums" title="Albums" icon={TabIcon} navigationBarStyle={{ backgroundColor: 'red' }} titleStyle={{ color: 'white' }}>
                  <Scene
                    key="albums1"
                    component={ AlbumsContainer }
                    title="Albums"
                    onRight={() => alert('Right button')}
                    rightTitle="Right"
                  />
                </Scene>
                <Scene key="calendar" title="Calendar" icon={TabIcon}>
                    <Scene
                      key="calendar1"
                      component={ CalendarContainer }
                      title="Calendar"
                      hideBackImage
                      backTitle="Left"
                      duration={1}
                      onBack={() => alert('Left button!')}
                      renderRightButton={() => <Text>Right</Text>}
                      panHandlers={null}
                    />
                </Scene>
                <Scene key="feed" component={ FeedContainer } title="Feed" icon={TabIcon} initial />
                <Scene key="profile" component={ ProfileContainer } title="Profile" icon={TabIcon} />
                <Scene key="createevent" component={ CreateEventContainer } title="Create Event" hideTabBar hideNavBar icon={TabIcon} />

              </Scene>

              <Scene key="when" component={ EventWhenContainer } title="When" />
              <Scene key="inviteFriends" component={ InviteFriendsContainer } title="Invite Friends" />

            </Scene>

          </Scene>
        </Router>
      </Provider>
    )

  }
}

export default Index;

//
//
// <Scene key="tabbar" initial >
//   <Scene
//       key="main"
//       tabs
//       tabBarStyle={styles.tabBarStyle}
//       tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
//   >
//     <Scene
//       key="albums" title="Albums" icon={TabIcon} navigationBarStyle={{ backgroundColor: 'red' }} titleStyle={{ color: 'white' }}>
//       <Scene
//         key="albums1"
//         component={ AlbumsContainer }
//         title="Albums"
//         onRight={() => alert('Right button')}
//         rightTitle="Right"
//       />
//     </Scene>
//     <Scene key="calendar" title="Calendar" icon={TabIcon}>
//         <Scene
//           key="calendar1"
//           component={ CalendarContainer }
//           title="Calendar"
//           hideBackImage
//           backTitle="Left"
//           duration={1}
//           onBack={() => alert('Left button!')}
//           renderRightButton={() => <Text>Right</Text>}
//           panHandlers={null}
//         />
//     </Scene>
//     <Scene key="feed" component={ FeedContainer } title="Feed" icon={TabIcon} initial />
//     <Scene key="profile" component={ ProfileContainer } title="Profile" icon={TabIcon} />
//     <Scene key="createevent" component={ CreateEventContainer } title="Create Event" hideTabBar hideNavBar icon={TabIcon} />
//
//   </Scene>
//
//   <Scene key="when" component={ EventWhenContainer } title="When" />
//   <Scene key="inviteFriends" component={ InviteFriendsContainer } title="Invite Friends" />
//
// </Scene>
