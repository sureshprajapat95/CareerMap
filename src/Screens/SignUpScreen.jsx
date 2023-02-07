import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContainer from '../Components/AppContainer';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';

const SignUpScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <AppContainer>
        <View>
          <Text>Mentors</Text>
        </View>
        <View style={{marginTop: 50}}>
          <Text>Register with below details</Text>
          <View style={{marginTop: 20}}>
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
                placeholder="Phone Number"
                keyboardType="numeric"
              />
            </Neomorph>
          </View>
        </View>
      </AppContainer>
    </ScrollView>
  );
};

export default SignUpScreen;
