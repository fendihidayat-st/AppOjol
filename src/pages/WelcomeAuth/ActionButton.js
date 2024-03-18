import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={{marginBottom: 25, marginHorizontal: 20}}>
      <View
        style={{
          justifyContent: 'center',
          marginBottom: 5,
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: 15,
            color: '#7e7e7e',
            paddingHorizontal: '15%',
            marginBottom: 6,
            textAlign: 'center',
          }}>
          {desc}
        </Text>
      </View>

      <TouchableOpacity onPress={onPress}  
        style={{
          backgroundColor: '#A55EEA',
          paddingVertical: 14,
          borderRadius: 15,
          marginHorizontal: 60,
          elevation: 2,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionButton;
