import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { store } from '../../init-store.js';
import { getFBFriends } from '../../actions/create-event.js';
import { CardSection, Button } from '../common';
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
          
            <ScrollView>
              <View >
                  <Text style={styles.mediumLabel}>Invited friends</Text>
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
            </ScrollView>

        );
    }
}


export default InviteFriends;
