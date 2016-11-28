import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Actions from 'react-native-router-flux';
import Button from '../common';

class TopBar extends Component {

    constructor (props) {
        super(props);
    }

    eventType (location) {

        let pathname = location;

        if (pathname === "create-event") {
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
        let primaryPath = this.props.location;

        return (
            <View className="event-header row">
                {
                    /* feed */
                    !this.props.eventID && primaryPath === '' &&
                    <Text className=" twelve columns title">Feed</Text>
                }
                {
                    /* /create-event */
                    !this.props.eventID && primaryPath === 'create-event' &&
                    <View>
                        <Text className="three columns back-button" onClick={ () => { hashHistory.goBack(); } }> Back </Text>
                        <Text className=" six columns title"> { this.eventType(this.props.location) }</Text>
                        <Text className="three columns cancel-event-button" onClick={ () => { this.cancelEvent(); } }> Cancel </Text>
                    </View>
                }
                {
                    /* /calendar */
                    !this.props.eventID && primaryPath === 'albums' &&

                    <View>
                        <Text className="three columns back-button" > </Text>
                        <Text className=" six columns title">
                            { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) }
                        </Text>
                        <Text className="three columns cancel-event-button"></Text>
                    </View>
                }
                {
                    /* /calendar */
                    !this.props.eventID && primaryPath === 'calendar' &&

                    <View>
                        <Text className="three columns back-button" > </Text>
                        <Text className=" six columns title">
                            { primaryPath.charAt(0).toUpperCase() + primaryPath.slice(1) }
                        </Text>
                        <Text className="three columns cancel-event-button"></Text>
                    </View>
                }

                {
                    !this.props.eventID && primaryPath === "profile" &&
                    <Text className="twelve columns title">Profile</Text>
                }
                { /**** EVENT ****/ }
                {
                    //User is Host and its a Poll
                    this.props.eventID && this.props.userIsHost && this.props.isPoll &&
                    <View>
                        <Text className="three columns back-button" > </Text>
                        <Text className=" six columns title">Poll</Text>
                        <Text className="three columns cancel-event-button"></Text>
                    </View>
                }
                {
                    //User is Invitee and its an Event
                    this.props.eventID && !this.props.userIsHost && !this.props.isPoll &&
                    <View>
                        <Text className="three columns back-button" > </Text>
                        <Text className=" six columns title">Event</Text>
                        <Text className="three columns cancel-event-button"></Text>
                    </View>
                }
                {
                    //User is Invitee and its a Poll
                    this.props.eventID && !this.props.userIsHost && this.props.isPoll &&
                    <View>
                        <Text className="three columns back-button" > </Text>
                        <Text className=" six columns title">Poll</Text>
                        <Text className="three columns cancel-event-button"></Text>
                    </View>
                }
                {
                    //User is Host and its an Event
                    this.props.eventID && this.props.userIsHost && !this.props.isPoll &&
                    <View>
                        <Button onClick={ () => { this.props.handleEdit(this.props.event); } } to={ 'edit/' + this.props.eventID }>
                            <Text className="three columns back-button"> Edit </Text>
                        </Button>
                        <Text className=" six columns title">Event</Text>
                        <Button className="three columns cancel-event-button"
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
