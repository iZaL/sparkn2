import React from 'react';
import { View, Image, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import classnames from 'classnames';
import { Button } from '../common/Button';

const Navbar = ({ currentLocation }) => {
    console.log(currentLocation);
    // if (process.env.DEVELOPMENT) {
    //     currentLocation = 'feed';
    // }
    //
    // let navbarClasses = classnames("navbar", {
    //     "display-none": currentLocation === "app"
    // });
    //
    // let albumsClasses = classnames("nav-button", {
    //     "selected": currentLocation.indexOf("albums") > -1
    // });
    //
    // let calendarClasses = classnames("nav-button", {
    //     "selected": currentLocation.indexOf("calendar") > -1
    // });
    //
    // let feedClasses = classnames("nav-button", {
    //     "selected": currentLocation.indexOf("feed") > -1
    // });
    //
    // let profileClasses = classnames("nav-button", {
    //     "selected": currentLocation.indexOf("profile") > -1
    // });
    //
    // let createEventClasses = classnames("nav-button", {
    //     "selected": currentLocation.indexOf("create-event") > -1
    // });

    return (
        <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'flex-end' }}>
            <Button onPress={Actions.albums} >
                <View style={{ width: 50, height: 50 }} >
                    <Image />
                    <Text>Albums</Text>
                </View>

            </Button>

            <Button onPress={Actions.calendar}>
                <View style={{ width: 50, height: 50 }} >
                    <Image />
                    <Text>Calendar</Text>
                </View>
            </Button>

            <Button onPress={Actions.feed}>
                <View style={{ width: 50, height: 50 }} >
                    <Image />
                    <Text>Feed</Text>
                </View>
            </Button>

            <Button onPress={Actions.profile}>
                <View style={{ width: 50, height: 50 }} >
                    <Image />
                    <Text>Profile</Text>
                </View>
            </Button>

            <Button>
                <View style={{ width: 50, height: 50 }} >
                    <Image />
                    <Text>Create</Text>
                </View>
            </Button>

        </View>
    );
};

export default Navbar;

// <Button onPress={Actions.createEvent({ title:'create event' })}>
//     <View style={{ width: 50, height: 50 }} >
//         <Image />
//         <Text>Create</Text>
//     </View>
// </Button>
