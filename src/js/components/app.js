import React from 'react';
import { View, Text } from 'react-native';
import Navbar from './general/navbar.js';
import Message from './general/message.js';

const App = ({ location, children, error }) => {
    console.log({ children });
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
