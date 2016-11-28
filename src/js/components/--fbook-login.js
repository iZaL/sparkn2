import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';

const FBSDK = require('react-native-fbsdk');
const { LoginButton } = FBSDK;

class FacebookLogin extends Component {
  render () {
    console.log('made it to FacebookLogin');
    return (
      <View>
        <Text>Login:</Text>
        <LoginButton
          readPermissions={["email", "public_profile", "user_friends"]}
          onLoginFinished={
            (error, result) => {
              console.log(result);
              if (error) {
                console.log(error);
                Alert.alert('Alert Title', JSON.stringify(error));
                //Alert("Login failed with error: " + error);
              } else if (result.isCancelled) {
                console.log('cancelled');
                Alert.alert("Login was cancelled");
              } else {
                console.log('granted');
                Alert.alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => Alert.alert("User logged out")}
          />
      </View>
    );
  }
}

export default FacebookLogin;
