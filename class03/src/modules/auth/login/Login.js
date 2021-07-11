import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Login({navigation}) {
  const navigateTo = () => {
    navigation.navigate('Signup', {data: 'some data'});
  };

  return (
    <View style={{marginTop:100}}>
      <TouchableOpacity onPress={navigateTo}>
        <Text>go to signup</Text>
      </TouchableOpacity>
    </View>
  );
}
