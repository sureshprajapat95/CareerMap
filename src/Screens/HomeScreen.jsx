import React, { useState } from 'react';
import {Text, View, Button, Pressable} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import Hamburger from '../Icons/Hamburger';

const HomeScreen = ({navigation}) => {

  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Neomorph
          inner
          style={{
            shadowRadius: 5,
            borderRadius: 10,
            backgroundColor: '#ff9700',
            width: 45,
            height: 35,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Hamburger />
        </Neomorph>
      ),
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('login')}>
          <Neomorph
            inner
            style={{
              shadowRadius: 5,
              borderRadius: 10,
              backgroundColor: '#ff9700',
              width: 85,
              height: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 20}}>
              Sign In
            </Text>
          </Neomorph>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Neomorph
        style={{
          shadowRadius: 10,
          borderRadius: 25,
          backgroundColor: '#eee',
          width: 150,
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home</Text>
      </Neomorph>
    </View>
  );
};

export default HomeScreen;
