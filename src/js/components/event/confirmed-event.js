import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import EventDetailsHeader from '../general/event-details-header.js';
import RSVPsArea from './confirmed-event/RSVPs-area.js';
import UploadPanel from './confirmed-event/upload-panel.js';
import PhotoStream from './confirmed-event/photo-stream.js';
import Message from '../general/message.js';
import { eventNote } from '../../lib/confirmed-event-helpers.js';
import formatDate from '../../lib/formatDate.js';
import styles from '../../style.js';


const ConfirmedEvent = ({ event, eventID, RSVPs, invitees, userIsHost, RSVPToEvent, handleUploadPhoto, photos, deletedPhotos, handleDeletePhoto, handleSharePhoto, file, handleSetFile, getSelectedPhoto, hasPhotoLoaded }) => {


    let handleClick = !userIsHost ? RSVPToEvent : '';

    let going = RSVPs.going;
    let notGoing = RSVPs.notGoing;
    let maybe = RSVPs.maybe;
    let respondedList = going.concat(maybe, notGoing);

    let notRespondedList = (responded, invitees) => {

        let notResponded = invitees.filter((invitedUser, index) => {
            return responded.indexOf(invitedUser.id) === -1;
        });

        return notResponded.map((user, i) => {
            return (
                <View style={styles.item} key={ user.id }>
                    <Image style={styles.uiAvatarImage} source={{ uri: user.photoURL }} />
                    <View style={styles.content}>
                        <Text style={styles.headerRsvpListItems}>{ user.firstName }</Text>
                    </View>
                </View>
            );
        });
    };

    let placeNameLong = (event.eventWhere[0] && event.eventWhere[0].placeName > 18);

    return (
        <View>
            <View>
                { eventNote(event) }
                <View style={styles.row}>
                    <Text>
                        What
                    </Text>
                    <View>
                        { event.eventWhat[0] || "TBC" }
                    </View>
                </View>

                <View style={styles.row}>
                    <Text>
                        Where
                    </Text>

                    <View>

                        { (!placeNameLong) &&
                          <Text style={styles.placeNameShort}>{ event.eventWhere[0].placeName || "TBC" }</Text>
                        }
                        { (placeNameLong) &&
                          <Text style={styles.placeNameLong}>{ event.eventWhere[0].placeName || "TBC" }</Text>
                        }
                        <Text>{ event.eventWhere[0].placeAddress }</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <Text>
                        When
                    </Text>

                    <View>
                        <View style={styles.date}>
                            { formatDate(event.eventWhen[0].date, true) || "TBC" }
                        </View>
                        <View style={styles.time}>
                            { event.eventWhen[0].time || "TBC" }
                        </View>
                    </View>
                </View>

                <Message text="Successfully shared to Facebook" />
                <RSVPsArea eventID={ eventID }
                           respondedList={ respondedList }
                           notRespondedList={ notRespondedList }
                           invitees={ invitees }
                           handleClick={ handleClick }
                           RSVPs={ RSVPs } />

                <UploadPanel eventID={ eventID }
                             hasPhotoLoaded={ hasPhotoLoaded }
                             handleUploadPhoto={ handleUploadPhoto }
                             file={ file }
                             handleSetFile={ handleSetFile }/>

                <PhotoStream photos={ photos }
                             hasPhotoLoaded={ hasPhotoLoaded }
                             deletedPhotos={ deletedPhotos }
                             handleDeletePhoto={ handleDeletePhoto }
                             handleSharePhoto={ handleSharePhoto }
                             getSelectedPhoto={ getSelectedPhoto }
                             eventID={ eventID }/>

            </View>

        </View>
    );

};

export default ConfirmedEvent;
