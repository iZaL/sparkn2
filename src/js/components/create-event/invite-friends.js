import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import axios from 'axios';
import { store } from '../../init-store';
import { getFBFriends } from '../../actions/create-event';
// import EventDetailsHeader from '../general/event-details-header';
import TopBar from '../event/top-bar';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import styles from '../../style';


class InviteFriends extends Component {
    // constructor (props){
    //     super(props);
    // }

  componentWillMount () {
    if (this.props.friends.length === 0) { // eslint-disable-line react/prop-types
      store.dispatch(getFBFriends());
    }
  }

  render () {

    const friends = this.props.friends.map((friendData, index) => { // eslint-disable-line react/prop-types
      return (
        <View
          key={ index }

        >
          <CardSection style={styles.cardSectionInvite}>
            <View style={styles.rowFlex}>

              <View style={styles.leftJustified}>
                <View>

                  <Image
                    style={styles.uiAvatarImage}
                    source={{ uri: friendData.photoURL }}
                  />

                </View>

                <Text style={styles.textfriendName}>
                  { friendData.firstName } { friendData.lastName }
                </Text>

              </View>
              <View style={styles.rightColumnInvite}>

                <Button
                  onPress={ (e) => this.props.handleSelected(friendData, index) }
                  buttonStyle={[styles.buttonStyle, { backgroundColor: '#fff' }]}
                >
                  Invite
                </Button>

              </View>

            </View>
          </CardSection>
        </View>
      );
    });

    const invitees = this.props.invitees.map((inviteeData, index) => {
      if (!inviteeData) {
        return (
          <View>
            <Text style={styles.smallMessageText}> Add your Friends to see them here </Text>
          </View>
        );
      }
      return (
        <TouchableOpacity
          onPress={ (e) => this.props.removeSelected(inviteeData, index) }
          key={ inviteeData.id }
          style={styles.invitedButton}
        >
          <Image
            style={styles.uiAvatarImage}
            source={{ uri: inviteeData.photoURL }}
          />
          <Text style={styles.textfriendName}>
            { inviteeData.firstName }
          </Text>
          <View>
            <Icon name="times" size={14} color="gray" />
          </View>

        </TouchableOpacity>
      );
    });

    return (
      <View>
        <TopBar location="inviteFriends" />

        <ScrollView>
          <View >
            { (this.props.invitees.length === 0) && // eslint-disable-line react/prop-types
            <View />
            }
            { (this.props.invitees.length !== 0) && // eslint-disable-line react/prop-types
              <Text style={styles.mediumLabel}>Invited friends:</Text>
            }
            <View style={styles.inviteesContainer}>
              { invitees }
            </View>
            <Text style={styles.mediumLabel}>Friends you can invite:</Text>
          </View>

          <View style={styles.uiMiddleAlignedViewidedList}>
            { friends }
          </View>

          { (this.props.invitees.length === 0) && // eslint-disable-line react/prop-types
            <View />
          }
          { (this.props.invitees.length !== 0) && // eslint-disable-line react/prop-types
            <Button
              buttonStyle={styles.buttonStyle}
              textStyle={styles.buttonTextStyle}
              onPress={Actions.confirm}
            >
              Next
            </Button>
          }
        </ScrollView>
      </View>

    );
  }
}


export default InviteFriends;
