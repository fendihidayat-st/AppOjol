/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Image, StatusBar, Text, View, TextInput} from 'react-native';

const TextBox = (props) => {
  return (

      <TextInput
        value={props.email}
        style={{
          backgroundColor: '#ffffff',
          marginHorizontal: 20,
          borderRadius: 15,
          elevation:5,
          marginTop: 10,
          paddingLeft:20
        }}
        placeholder={props.placeholder}
        onChangeText = {Text => props.setEmail(Text)}
        secureTextEntry={props.isPassword}
      />
  );
};

export default TextBox;
