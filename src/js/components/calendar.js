import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';
import Navbar from './general/navbar';

class Calendar extends Component {

  render() {
    const { errorTextStyle, pageContainerStyle, CalendarContainerStyle, navbarContainerStyle } = styles;
    return (
      <View style={pageContainerStyle}>
        <View style={CalendarContainerStyle}>
          <CardSection>
            <Text style={errorTextStyle}>Calendar</Text>
          </CardSection>
        </View>
        <View style={navbarContainerStyle}>
            <Navbar currentLocation={'Calendar'} />
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
  CalendarContainerStyle: {
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

export default Calendar;
