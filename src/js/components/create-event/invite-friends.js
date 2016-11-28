import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { store } from '../../init-store.js';
import { getFBFriends } from '../../actions/create-event.js';
import { Button } from '../common';
import styles from '../../style.js';


class InviteFriends extends Component {
    constructor (props){
        super(props);
    }

    componentWillMount () {
        if (this.props.friends.length === 0) {
            store.dispatch(getFBFriends());
        }
    }

    render () {
        var friends = this.props.friends.map((friendData, index) => {
            return (
              <View
                key={ index }
                style={styles.container}
              >
                    <View style={styles.rightFloatedContent}>
                        <Button
                          onPress={ (e) => this.props.handleSelected(friendData, index) }
                          buttonStyle={[styles.buttonStyle, { backgroundColor: '#fff' }]}
                          textStyle={[styles.buttonTextStyle, { color: 'lightgray' }]}
                        >
                          Invite
                        </Button>
                    </View>

                    <Image
                      style={styles.uiAvatarImage}
                      source={ friendData.photoURL }
                    />

                    <Text style={styles.textfriendName}>
                        { friendData.firstName } { friendData.lastName }
                    </Text>
              </View>
            );
        });

        var invitees = this.props.invitees.map((inviteeData, index) => {
            if (!inviteeData) {
                return (
                  <View>
                      <Text> Add your Friends to see them here </Text>
                  </View>
              );
          } else {
              return (

                    <Button
                      onPress={ (e) => this.props.removeSelected(inviteeData, index) }
                      key={ inviteeData.id }
                      buttonStyle={[styles.buttonStyle, { backgroundColor: '#fff' }]}
                      textStyle={[styles.buttonTextStyle, { color: 'lightgray' }]}
                    >
                        <Image
                          style={styles.uiAvatarImage}
                          source={ inviteeData.photoURL}
                          source={require('../../../img/placeholder.png')}
                          />

                          { inviteeData.firstName }

                        <Icon name="times" size={14} color="gray" />

                    </Button>

              );
          }
      });

      return (
          <View>
              <View>
                  <Text>Invited friends</Text>
                  { invitees }
              </View>

              <View style={styles.uiMiddleAlignedViewidedList}>
                  { friends }
              </View>

              { (this.props.invitees.length === 0) &&
               <View />
              }
              { (this.props.invitees.length !== 0) &&
                <Button
                  buttonStyle={[styles.buttonStyle, { backgroundColor: 'green' }]}
                  textStyle={[styles.buttonTextStyle, { color: 'lightgray' }]}
                  onPress={Actions.confirm}
                >
                  Next
                </Button>
              }

          </View>
        );
    }
}


export default InviteFriends;
