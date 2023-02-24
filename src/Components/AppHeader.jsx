import React from 'react';
import {Text, View} from 'react-native';
import {Colors} from '../Utils/Colors';
import {Fonts} from '../Utils/Fonts';
import HeaderButton from './HeaderButton';

const AppHeader = ({left,middleText='', right,style={}}) => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: Colors.backgroundColor,
        ...style,
      }}>
      <View
        style={{
          backgroundColor: Colors.primary,
          paddingHorizontal: 20,
          height: 70,
          elevation: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row'
        }}>
        {left.show ? (
          <HeaderButton
            Icon={left.Icon}
            text={left.text || ''}
            onPress={left.click}
          />
        ) : (
          <Text>{''}</Text>
        )}
        <Text
          style={{
            fontSize: 20,
            fontFamily: Fonts.SemiBold,
            textAlign: 'center',
            color: Colors.light
          }}>
          {middleText}
        </Text>
        {right.show ? (
          <HeaderButton
            Icon={right.Icon}
            text={right.text || ''}
            onPress={right.click}
          />
        ) : (
          <Text>{''}</Text>
        )}
      </View>
    </View>
  );
};

export default AppHeader;
