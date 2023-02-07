import React from 'react';
import { Text,TextInput } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';
import { Colors } from '../Utils/Colors';
import { Device } from '../Utils/DeviceDimensions';

const Input = ({keyboardType,placeholder}) => {
  return (
      <Neomorph
        inner
        style={{
          shadowRadius: 15,
          borderRadius: 35,
          backgroundColor: '#ddd',
          width: Device.width - 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}>
        <Text
          style={{
            position: 'absolute',
            left: 15,
            fontSize: 18,
            fontWeight: '600',
            color: Colors.primary,
          }}>
          +91
        </Text>
        <TextInput
          style={{
            textAlign: 'left',
            width: '100%',
            paddingLeft: 60,
            fontSize: 18,
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      </Neomorph>
  );
};
export default Input;