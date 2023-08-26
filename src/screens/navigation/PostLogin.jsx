import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';

const PostLoginStack = createNativeStackNavigator();

const PostLogin = () => {
  return (
    <PostLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="App">
      <PostLoginStack.Screen name="App" component={BottomNavigation} />
    </PostLoginStack.Navigator>
  );
};

export default PostLogin;
