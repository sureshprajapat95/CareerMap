import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Pressable, Text} from 'react-native';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';

const Button = ({buttonText, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Neomorph
        inner
        darkShadowColor={Colors.light}
        lightShadowColor={Colors.dark}
        style={{
          shadowRadius: 15,
          borderRadius: 35,
          backgroundColor: Colors.primary,
          width: Device.width - 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: Colors.light}}>
          {buttonText}
        </Text>
      </Neomorph>
    </Pressable>
  );
};

export default Button;


export const ButtonHalfWidth = ({buttonText, onPress,style={}}) => {
  return (
    <Pressable onPress={onPress}>
      <Neomorph
        inner
        darkShadowColor={Colors.light}
        lightShadowColor={Colors.dark}
        style={{
          ...style,
          shadowRadius: 15,
          borderRadius: 35,
          backgroundColor: Colors.primary,
          width: (Device.width/2)-25,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '600', color: Colors.light}}>
          {buttonText}
        </Text>
      </Neomorph>
    </Pressable>
  );
};