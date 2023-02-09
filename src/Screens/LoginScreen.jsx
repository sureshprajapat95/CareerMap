import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import Input from '../Components/Input';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';

const staticImage = require('../assets/app_logo.png');

const LoginScreen = ({navigation}) => {
  return (
    <AppContainer>
      <View style={{alignItems: 'center',marginTop: 40}}>
        <Image source={staticImage} style={{width: 350, height: 100}} />
        <Text style={{fontSize: 16,color: Colors.dark,textAlign: 'center'}}>Get 'Career Guidance' from India's best Counselors</Text>
      </View>
        <View
          style={{
            marginTop: 40,
            borderColor: Colors.primary,
            borderWidth: 2,
            borderRadius: 4,
            padding: 20,
            marginBottom: 50
          }}>
        <Text>
          Let's get started, enter your mobile number to sign in your Career Map
          account
        </Text>
      </View>
      <View>
        <Input keyboardType={'numeric'} placeholder={'Phone Number'} customText={true} />
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
  );
};

export default LoginScreen;
