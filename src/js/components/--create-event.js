import React, { Component } from 'react';
import { View, Text } from 'react-native';
import CardSection from './common';
import Navbar from './general/navbar';

class CreateEvent extends Component {

  render() {
    const { errorTextStyle, pageContainerStyle, CreateEventContainerStyle, navbarContainerStyle } = styles;
    return (
      <View style={pageContainerStyle}>
        <View style={CreateEventContainerStyle}>
          <CardSection>
            <Text style={errorTextStyle}>CreateEvent</Text>
          </CardSection>
        </View>
        <View style={navbarContainerStyle}>
            <Navbar currentLocation={'CreateEvent'} />
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  pageContainerStyle: {
    borderWidth: 5,
    borderColor: 'green',
    borderRadius: 3,
    flex: 1
  },
  CreateEventContainerStyle: {
    borderWidth: 5,
    borderColor: 'red',
    borderRadius: 3,
    flex: 5
  },
  navbarContainerStyle: {
    borderWidth: 5,
    borderColor: 'blue',
    borderRadius: 3,
    flex: 1
  }
};

export default CreateEvent;
