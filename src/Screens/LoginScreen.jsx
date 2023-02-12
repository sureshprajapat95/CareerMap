import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import Input from '../Components/Input';
import {Colors} from '../Utils/Colors';
import ChevronRight, { ChevronLeft } from '../Utils/Icons/Chevrons';

const staticImage = require('../assets/app_logo.png');

const LoginScreen = ({navigation}) => {
  return (
    <>
    <AppHeader
      middleText={'Login'}
      left={{
        show: true,
        Icon: ChevronLeft,
        click: () => navigation.goBack(),
      }}
      right={{
        show: false,
      }}
    />
      <AppContainer>
        <View style={{alignItems: 'center', marginTop: 40}}>
          <Image source={staticImage} style={{width: 350, height: 100}} />
          <Text style={{fontSize: 16, color: Colors.dark, textAlign: 'center'}}>
            Get 'Career Guidance' from India's best Counselors
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
            borderColor: Colors.primary,
            borderWidth: 2,
            borderRadius: 4,
            padding: 20,
            marginBottom: 50,
          }}>
          <Text>
            Let's get started, enter your mobile number to sign in your Career
            Map account
          </Text>
        </View>
        <View>
          <Input
            keyboardType={'numeric'}
            placeholder={'Phone Number'}
            customText={true}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button
            buttonText="Sign In"
            onPress={() => {
              navigation.navigate('otp');
            }}
          />
        </View>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            paddingVertical: 20,
          }}
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '600',
              color: Colors.dark,
            }}>
            Don't have an Account?
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 18,
              fontWeight: '600',
              paddingLeft: 10,
            }}>
            Sign Up
          </Text>
        </Pressable>
      </AppContainer>
    </>
  );
};

export default LoginScreen;
