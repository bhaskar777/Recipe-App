import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text
        onPress={() => {
          navigation.navigate('App');
        }}>
        Onboarding
      </Text>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
