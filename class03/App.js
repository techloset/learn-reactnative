import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('users');

export default function App() {
  useEffect(() => {
   const users = usersCollection.get()
   console.log("users", users);
  }, [])
  return (
    <View style={{flex:1, marginTop:50}}>
      <Text>Test</Text>
      <Progress.Bar progress={0} height={15} width={200} ><Text style={{textAlign:"center", color:'white'}}>10%</Text></Progress.Bar>
    </View>
  );
}

// export default function App() {
//   return <Navigation />;
// }
