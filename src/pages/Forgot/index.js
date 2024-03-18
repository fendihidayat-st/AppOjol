/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Image, StatusBar, Text, View, TextInput, TouchableOpacity} from 'react-native';
import TextBox from "./TextBox";

const Forgot: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#dbe4f3'}}>
      <View style={{alignItems: 'center'}}>
      <Image
          source={require('../../image/logo.png')}
          style={{width: 200, height: 200}}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'gray',
          }}>
          Selamat Datang di
          <Text style={{color: '#A55EEA'}}> O-Jol</Text>
        </Text>
        <Text
          style={{
            marginTop: 5,
            color: '#7e7e7e',
            paddingHorizontal: '15%',
            marginBottom: 6,
            textAlign: 'center',
          }}>
          Silahkan masukkan email untuk mereset password
        </Text>
      </View>
      <TextBox email={email} setEmail={setEmail} placeholder="Email" isPassword={false}/>

      <TouchableOpacity style={{
        backgroundColor: '#A55EEA',
        paddingVertical: 14,
        marginTop: 20,
        marginHorizontal:20,
        borderRadius:15,
        elevation:2,
      }}>
        
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>Reset</Text>
      </TouchableOpacity>


      <View style={{marginHorizontal:20, flexDirection:'row', marginTop: 10}}>
        <TouchableOpacity onPress={() => navigation.replace("Login")} style={{flex: 1 }}>
          <Text style={{fontWeight:'bold'}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.replace("WelcomeAuth")} 
          style={{flex: 1, justifyContent:'center', alignItems:'flex-end'
        }}>
          <Text>Welcome Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Forgot;