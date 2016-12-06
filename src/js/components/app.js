import React from 'react';
import { View } from 'react-native';
import Navbar from './general/navbar';
import Message from './general/message';

const App = ({ location, children, error }) => {
  let currentLocation = 'login';

  //if (!process.env.DEVELOPMENT) {
    //  currentLocation = location.pathname;
  //} else {
    //  currentLocation = 'test';
  //}

  //let online = window.navigator.onLine;
  return (
    <View>
      {
        //  !online &&
        //  <Message text="Oops! No internet connection..." />
      }
      {
        //  error &&
        //  <Text>Error { error.status } { error.data.error }: { error.data.message }</Text>
      }
      {// children }
      }
      <Navbar currentLocation={ currentLocation } />
    </View>
  );
};

export default App;
