/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Scene, Reducer, Router, Actions } from 'react-native-router-flux';
import styles from './style';
import TabIcon from './components/common/tab-bar/TabIcon';
import { store } from './init-store';
import Intro from './components/Intro';
import LoginContainer from './containers/login-container';
import FeedContainer from './containers/feed-container';
import CalendarContainer from './containers/calendar-container';
import AlbumsContainer from './containers/albums-container';
import ProfileContainer from './containers/profile-container';
import EventContainer from './containers/event-container';
import EventDetailsContainer from './containers/create-event/event-details-container';
import EventWhatContainer from './containers/create-event/event-what-container';
import EventWhereContainer from './containers/create-event/event-where-container';
import EventWhenContainer from './containers/create-event/event-when-container';
import InviteFriendsContainer from './containers/create-event/invite-friends-container';
import ConfirmNewEventContainer from './containers/create-event/confirm-new-event-container';

// disable remote debugger warning in a simulator
console.disableYellowBox = true;

const reducerCreate = (params) => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class Index extends Component {

  cancelEvent () {
    this.props.discardEvent();
    Actions.tabbar();
  }

  render () {

    return (

      <Provider store={store} >
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
          <Scene key="root" hideNavBar hideTabBar>
            <Scene key="intro" component={Intro} title="Intro" hideNavBar initial />
            <Scene key="login" component={LoginContainer} title="Login" hideNavBar />
            <Scene key="event" component={EventContainer} title="Event" hideNavBar />

            <Scene key="tabbar" >

              <Scene
                key="main"
                tabs
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >
                <Scene
                  key="albums"
                  title="Albums"
                  hideNavBar
                  icon={TabIcon}
                  iconName="camera"
                  navigationBarStyle={styles.navigationBarStyle}
                  titleStyle={styles.navigationBarTextStyle}
                >
                  <Scene
                    key="albums1"
                    component={ AlbumsContainer }
                    title="Albums"
                  />
                </Scene>

                <Scene
                  key="calendar"
                  title="Calendar"
                  hideNavBar
                  icon={TabIcon}
                  iconName="calendar"
                  navigationBarStyle={styles.navigationBarStyle}
                  titleStyle={styles.navigationBarTextStyle}
                >
                  <Scene
                    key="calendar1"
                    component={ CalendarContainer }
                    title="Calendar"
                  />
                </Scene>

                <Scene
                  key="feed"
                  component={ FeedContainer }
                  title="Feed"
                  hideNavBar
                  icon={TabIcon}
                  iconName="globe"
                  navigationBarStyle={styles.navigationBarStyle}
                  titleStyle={styles.navigationBarTextStyle}
                  initial
                />
                <Scene
                  key="profile"
                  component={ ProfileContainer }
                  title="Profile"
                  hideNavBar
                  icon={TabIcon}
                  iconName="user"
                  navigationBarStyle={styles.navigationBarStyle}
                  titleStyle={styles.navigationBarTextStyle}
                />
                <Scene
                  key="eventdetails"
                  component={ EventDetailsContainer }
                  title="Create"
                  hideNavBar
                  hideTabBar
                  icon={TabIcon}
                  iconName="pencil"
                  navigationBarStyle={styles.navigationBarStyle}
                  titleStyle={styles.navigationBarTextStyle}
                  backTitle="Back"
                  backButtonTextStyle={styles.backButtonTextStyle}
                  rightButtonTextStyle={styles.backButtonTextStyle}
                  hideBackImage
                  duration={100}
                  direction="horizontal"
                  onRight={ () => { this.cancelEvent(); } }
                  rightTitle="Cancel"
                />
              </Scene>
              <Scene
                key="what"
                component={ EventWhatContainer }
                title="What"
                hideNavBar
                navigationBarStyle={styles.navigationBarStyle}
                titleStyle={styles.navigationBarTextStyle}
                backTitle="Back"
                backButtonTextStyle={styles.backButtonTextStyle}
                rightButtonTextStyle={styles.backButtonTextStyle}
                hideBackImage
                duration={100}
                direction="horizontal"
                onRight={ () => { this.cancelEvent(); } }
                rightTitle="Cancel"
              />
              <Scene
                key="where"
                component={ EventWhereContainer }
                title="Where"
                hideNavBar
                navigationBarStyle={styles.navigationBarStyle}
                titleStyle={styles.navigationBarTextStyle}
                backTitle="Back"
                backButtonTextStyle={styles.backButtonTextStyle}
                rightButtonTextStyle={styles.backButtonTextStyle}
                hideBackImage
                duration={100}
                direction="horizontal"
                onRight={ () => { this.cancelEvent(); } }
                rightTitle="Cancel"
              />
              <Scene
                key="when"
                component={ EventWhenContainer }
                title="When"
                hideNavBar
                navigationBarStyle={styles.navigationBarStyle}
                titleStyle={styles.navigationBarTextStyle}
                backTitle="Back"
                backButtonTextStyle={styles.backButtonTextStyle}
                rightButtonTextStyle={styles.backButtonTextStyle}
                hideBackImage
                duration={100}
                direction="horizontal"
                onRight={ () => { this.cancelEvent(); } }
                rightTitle="Cancel"
              />
              <Scene
                key="inviteFriends"
                component={ InviteFriendsContainer }
                title="Invite Friends"
                hideNavBar
                navigationBarStyle={styles.navigationBarStyle}
                titleStyle={styles.navigationBarTextStyle}
                backTitle="Back"
                backButtonTextStyle={styles.backButtonTextStyle}
                rightButtonTextStyle={styles.backButtonTextStyle}
                hideBackImage
                duration={100}
                direction="horizontal"
                onRight={ () => { this.cancelEvent(); } }
                rightTitle="Cancel"
              />
              <Scene
                key="confirm"
                component={ ConfirmNewEventContainer }
                title="Confirm Event"
                hideNavBar
                navigationBarStyle={styles.navigationBarStyle}
                titleStyle={styles.navigationBarTextStyle}
                backTitle="Back"
                backButtonTextStyle={styles.backButtonTextStyle}
                rightButtonTextStyle={styles.backButtonTextStyle}
                hideBackImage
                duration={100}
                direction="horizontal"
                onRight={ () => { this.cancelEvent(); } }
                rightTitle="Cancel"
              />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

export default Index;
