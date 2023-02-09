import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Pressable, Text} from 'react-native';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';

const Button = ({buttonText, onPress,buttonStyle={},icon=null,textStyle={}}) => {
  const [pressed,setPressed] = React.useState(false);
  return (
    <Pressable onPress={onPress} onPressIn={()=> setPressed(prev=> !prev)} onPressOut={()=> setPressed(prev=> !prev)}>
      <Neomorph
        inner={pressed}
        // darkShadowColor={Colors.light}
        // lightShadowColor={Colors.dark}
        style={{
          shadowRadius: 5,
          borderRadius: 35,
          backgroundColor: Colors.primary,
          width: Device.width - 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          ...buttonStyle
        }}>
        {icon}
        <Text style={{fontSize: 18, fontWeight: '600', color: Colors.light,...textStyle}}>
          {buttonText}
        </Text>
      </Neomorph>
    </Pressable>
  );
};

export default Button;


export const ButtonHalfWidth = ({buttonText, onPress,style={}}) => {
  const [pressed,setPressed] = React.useState(false);
  return (
    <Pressable onPress={onPress} onPressIn={()=> setPressed(prev=> !prev)} onPressOut={()=> setPressed(prev=> !prev)}>
      <Neomorph
        inner={pressed}
        style={{
          ...style,
          shadowRadius: 5,
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