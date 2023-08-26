import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../Onboarding/Onboarding';
import InitialQuestions from '../Initialquestions/InitialQuestions';
import PostLogin from './PostLogin';

const PreLoginStack = createNativeStackNavigator();

const PreLogin = () => {
  return (
    <PreLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Onboarding">
      <PreLoginStack.Screen name="Onboarding" component={Onboarding} />
      <PreLoginStack.Screen
        name="InitialQuestions"
        component={InitialQuestions}
      />
      <PreLoginStack.Screen name="App" component={PostLogin} />
    </PreLoginStack.Navigator>
  );
};

export default PreLogin;
