import React from 'react';
import {Pressable, Text, TextInput} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';

const Input = ({keyboardType, placeholder='', customText = false}) => {
  return (
    <Neomorph
      inner
      style={{
        shadowRadius: 5,
        borderRadius: 35,
        backgroundColor: '#eee',
        width: Device.width - 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: 20,
      }}>
      {customText && (
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
      )}
      <TextInput
        style={{
          textAlign: 'left',
          width: '100%',
          paddingLeft: customText ? 60 : 30,
          fontSize: 18,
        }}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </Neomorph>
  );
};
export default Input;

export const PressableInput = ({placeholder='', iconRight, onPress}) => {
  return <Pressable onPress={onPress}>
    <Neomorph
      inner
      style={{
        shadowRadius: 5,
        borderRadius: 35,
        backgroundColor: '#eee',
        width: Device.width - 50,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 20
      }}>
      <Text style={{fontSize: 18}}>{placeholder}</Text>
      {iconRight}
    </Neomorph>
  </Pressable>;
};
