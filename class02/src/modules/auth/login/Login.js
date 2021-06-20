import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {styles} from './LoginStyle';
export default function Login() {
    console.log("data");
    // if(Platform.OS === 'android') {

    // }
    // eles{

    // }
  return (
    <View style={styles.container}>
      <View style={{flex:1, backgroundColor:'black'}}> 
          <Text>1</Text>
      </View>
      <View  style={{flex:3,backgroundColor:'yellow', alignItems: 'center', justifyContent:'center'}}>
      <Text >2</Text>
      <Image source={{}} />
      </View>
     

    </View>
  );
}
