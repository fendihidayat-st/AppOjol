/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image,View, Text, TouchableOpacity, StatusBar} from 'react-native';
import ActionButton from './ActionButton';
const WelcomeAuth = ({navigation}) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#dbe4f3'}}>
      <View style={{alignItems: 'center'}}>
        
      <Image
          source={require('../../image/logo.png')}
          style={{width: 200, height: 200, marginTop:80}}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'gray',
            marginBottom: 70,
          }}>
          Selamat Datang di
          <Text style={{color: '#A55EEA'}}> O-Jol</Text>
        </Text>
      </View>

      <ActionButton onPress={()=>navigation.navigate('Login')} desc='Silahkan masuk, jika sudah punya akun' title='Masuk'/>
      <ActionButton onPress={()=>navigation.navigate('Register')}  desc='Silahkan daftar, jika belum punya akun' title='Daftar' />
    </View>
  );
};

export default WelcomeAuth;
