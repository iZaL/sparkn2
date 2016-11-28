import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import classnames from 'classnames';
import validCookieExists from '../../lib/validCookieExists.js';
import { Button, Input } from '../common';

class EventDetails extends React.Component {

    constructor (props){
        super(props);
    }

    componentDidMount () {

        if (validCookieExists() && this.props.shouldGetFBFriends) {

            this.props.getFBFriends();
        }
    }

    render () {

        let hideNext = this.props.eventDetails.eventName === "" || this.props.eventDetails.eventDescription === "";

        return (
            <View style={styles.justify}>

                <Text>
                    Enter the name of your event and a description.
                </Text>


                <View style={styles.row}>

                    <Input
                        style={styles.inputNote}
                        onChange={ this.props.handleChange.bind(this, 'eventName') }
                        value={ this.props.eventDetails ? this.props.eventDetails.eventName : '' }
                        type="text"
                        placeholder="Event name" />

                </View>

                <View style={styles.row}>

                    <Input
                        style={styles.inputNote}
                        onChange={ this.props.handleChange.bind(this, 'eventDescription') }
                        value={ this.props.eventDetails ? this.props.eventDetails.eventDescription : '' }
                        type="text"
                        placeholder="Event description" />
                </View>

                <View style={styles.row}>

                    <Input
                        style={styles.inputNote}
                        onChange={ this.props.handleChange.bind(this, 'eventNote') }
                        value={ this.props.eventDetails ? this.props.eventDetails.eventNote : '' }
                        //rows="5"
                        placeholder="Leave a note to your friends (optional)" />

                </View>

                <View style={styles.row}>

                    { (hideNext) &&
                      <View />
                    }
                    { (!hideNext) &&
                      <Button
                      onPress={Actions.what}
                      buttonStyle={ nextButtonClasses }
                      buttonTextStyle={styles.buttonTextStyle}
                      >
                        Next
                      </Button>
                    }

                </View>

            </View>
        );
    }
}

export default EventDetails;
