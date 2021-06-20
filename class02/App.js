import React from 'react';
import {View, Text, ActivityIndicator, Button,Alert} from 'react-native';
import Login from './src/modules/auth/login/Login';
export default function App() {
  return <Login />;
  // return (
    // <Button
    //   title="Press me"
    //   color="#f194ff"
    //   onPress={() => Alert.alert('Button with adjusted color pressed')}
    // />
  // );
}
