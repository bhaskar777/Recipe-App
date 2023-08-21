import {Text, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const App = () => {
  console.log('ppp--', Config.MY_TESTING_KEY);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
