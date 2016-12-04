import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TopBar from './event/top-bar.js';
import { Button } from './common';
import Input from './general/input';
import styles from '../style.js';

const Profile = ({ location, user, firstName, lastName, handleLogOut, handleChangeName, handleEditName }) => {

  const hideEditButton = (firstName === '' ? styles.hideEditButton : [styles.buttonStyle, { backgroundColor: 'green' }]);

  function changeName (firstName, lastName) {
      handleEditName(firstName, lastName);
      Actions.feed({ type: 'reset' });
  }
    console.log(this.props);
    //<TopBar location={ location } />

    return (
      <View style={styles.profilePage}>
          <TopBar location="profile" />

          <View style={styles.container}>


              <View style={styles.row}>
                  <Text style={styles.userName}> { firstName + ' ' + lastName } </Text>
              </View>

              <View style={styles.row}>
                  <Image style={styles.uiProfilePagePhotoCircularImage} source={{ uri: user.photoURL }} />
              </View>

              <View style={styles.row}>
                  <Text style={styles.editNameTitle}> Change Name </Text>
              </View>

              <View style={styles.row}>
                  <TextInput
                      value={ firstName }
                      placeholder="First name"
                      onChangeText={ (e) => handleChangeName('firstName', e) }
                      style={styles.inputStyle}
                      />
              </View>

              <View style={styles.row}>
                  <TextInput
                      value={ lastName }
                      placeholder="Surname"
                      onChangeText={ (e) => handleChangeName('lastName', e)}
                      style={styles.inputStyle}
                      />
              </View>

              <View style={styles.row}>

                  <Button buttonStyle={ hideEditButton } textStyle={[styles.buttonTextStyle, { color: 'white' }]} onPress={ () => changeName(firstName, lastName) } >
                      Change Name
                  </Button>
              </View>

              <View style={styles.row}>
                  <Button buttonStyle={[styles.buttonStyle, { backgroundColor: '#fff' }]} textStyle={[styles.buttonTextStyle, { color: 'lightgray' }]} onPress={ handleLogOut } >
                      Log Out
                  </Button>

              </View>

              <View style={styles.row}>
                  <Button buttonStyle={[styles.buttonStyle, { backgroundColor: '#fff' }]} textStyle={[styles.buttonTextStyle, { color: 'lightgray' }]} onPress={ () => Actions.intro() }>
                      Return to main
                  </Button>

              </View>

          </View>
      </View>
    );
};

export default Profile;
