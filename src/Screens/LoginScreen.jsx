import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import {Image, Text, View, Pressable, Alert} from 'react-native';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import Input from '../Components/Input';
import {Call} from '../Service/Api';
import {Colors} from '../Utils/Colors';
import ChevronRight, {ChevronLeft} from '../Utils/Icons/Chevrons';
import Loader from '../Utils/Loader';

const staticImage = require('../assets/app_logo.png');

const LoginScreen = ({navigation}) => {
  const [states, setStates] = React.useState({phone_number: ''});
  const [isLoading, setIsLoading] = React.useState(false);

  

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(false);
    }, []),
  );

  const handleLogin = async () => {
    if (states.phone_number.length === 10) {
      setIsLoading(true);
      let payload = {phone_number: states.phone_number, device_type: 'android'};
      try {
        const response = await Call('login', payload);
        setIsLoading(true);
        if (response.data.success) {
          navigation.navigate('otp',{phone_number: states.phone_number});
        } else {
          Alert.alert(`error`);
        }
      } catch (error) {
        setIsLoading(false);
          Alert.alert(error.response.data.message);
      }
    } else {
      Alert.alert(`${states.phone_number} Enter correct mobile number`);
    }
  };

  return (
    <>
      <Loader visible={isLoading} />
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
            onChangeText={phone_number =>
              setStates(prev => ({...prev, phone_number}))
            }
            value={states.phone_number}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button buttonText="Sign In" onPress={handleLogin} />
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
