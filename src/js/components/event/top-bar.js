import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Actions from 'react-native-router-flux';
import { Button } from '../common';
import styles from '../../style.js';

class TopBar extends Component {

    constructor (props) {
        super(props);
    }

    eventType (location) {
        console.log(location);
        let pathname = location.split('/').pop();
        console.log(pathname);

        if (pathname === "eventdetails") {
            return "Create an event";
        } else {
            return pathname.charAt(0).toUpperCase() + pathname.slice(1) + "?";
        }
    }

    cancelEvent () {

        this.props.discardEvent();
        Actions.feed();
    }

    render () {
        console.log(this.props);
        console.log('topBar');
        console.log(this.props.location);
        let primaryPath = this.props.location.split('/')[0];

        return (
            <View style={styles.topBarContainer}>
                {
                    /* feed */
                    !this.props.eventID && primaryPath === 'feed' &&
                    <View style={styles.rowCentered}>
                      <Text style={styles.title1}>Feed</Text>
                    </View>
                }
                {
                    /* /create-event */
                    !this.props.eventID && primaryPath === 'eventdetails' &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { Actions.pop(); } }> Back </Button>
                        <Text style={styles.title1}> { this.eventType(this.props.location) }</Text>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { this.cancelEvent(); } }> Cancel </Button>
                    </View>
                }
                {
                    /* /invite-friends */
                    !this.props.eventID && primaryPath === 'inviteFriends' &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { Actions.pop(); } }> Back </Button>
                        <Text style={styles.title1}> Invite Friends </Text>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { this.cancelEvent(); } }> Cancel </Button>
                    </View>
                }
                {
                    /* /confirm-event */
                    !this.props.eventID && primaryPath === 'confirm' &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { Actions.pop(); } }> Back </Button>
                        <Text style={styles.title1}> { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) } </Text>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { this.cancelEvent(); } }> Cancel </Button>
                    </View>
                }
                {
                    /* /calendar */
                    !this.props.eventID && primaryPath === 'albums' &&

                    <View style={styles.rowCentered}>
                        <Button textStyle={styles.topBarButtonText}> </Button>
                        <Text style={styles.title1}>
                            { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) }
                        </Text>
                        <Button textStyle={styles.topBarButtonText}> </Button>
                    </View>
                }
                {
                    /* /calendar */
                    !this.props.eventID && primaryPath === 'calendar' &&

                    <View style={styles.rowCentered}>
                        <Button textStyle={styles.topBarButtonText}> </Button>
                        <Text style={styles.title1}>
                            { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) }
                        </Text>
                        <Button textStyle={styles.topBarButtonText}></Button>
                    </View>
                }

                {
                    !this.props.eventID && primaryPath === "profile" &&
                    <View style={styles.rowCentered}>
                      <Text style={styles.title1}>Profile</Text>
                    </View>
                }
                { /**** EVENT ****/ }
                {
                    //User is Host and its a Poll
                    this.props.eventID && this.props.userIsHost && this.props.isPoll &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText}> </Button>
                        <Text style={styles.title1}>Poll</Text>
                        <Button textStyle={styles.topBarButtonText}></Button>
                    </View>
                }
                {
                    //User is Invitee and its an Event
                    this.props.eventID && !this.props.userIsHost && !this.props.isPoll &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText}> </Button>
                        <Text style={styles.title1}>Event</Text>
                        <Button textStyle={styles.topBarButtonText}></Button>
                    </View>
                }
                {
                    //User is Invitee and its a Poll
                    this.props.eventID && !this.props.userIsHost && this.props.isPoll &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText}> </Button>
                        <Text style={styles.title1}>Poll</Text>
                        <Button textStyle={styles.topBarButtonText}></Button>
                    </View>
                }
                {
                    //User is Host and its an Event
                    this.props.eventID && this.props.userIsHost && !this.props.isPoll &&
                    <View style={styles.rowSpaced}>
                        <Button textStyle={styles.topBarButtonText} onClick={ () => { this.props.handleEdit(this.props.event); } } to={ 'edit/' + this.props.eventID }> Edit </Button>
                        <Text style={styles.title1}>Event</Text>
                        <Button textStyle={styles.topBarButtonText}
                            onClick={ this.props.displayCancelModal }>
                            Cancel
                        </Button>
                    </View>
                }
            </View>
        );
    }
}

export default TopBar;
