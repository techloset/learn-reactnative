import React from 'react';
import {View, Text, Button} from 'react-native';

function Signup({navigation}) {
  return (
    <View style={{marginTop:100}}>
      <Button title="Go to Login" onPress={() => navigation.goBack()} />
    </View>
  );
}
export default Signup;
