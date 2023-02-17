import React from 'react';

import {ScrollView, Text, View} from 'react-native';
import AppHeader from '../Components/AppHeader';
import Hamburger from '../Utils/Icons/Hamburger';
import Login from '../Utils/Icons/Login';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import Input, {PressableInput} from '../Components/Input';
import ChevronRight from '../Utils/Icons/Chevrons';
import {Colors} from '../Utils/Colors';
import {PoppinsBold, PoppinsRegular} from '../Utils/Fonts';
import Profile from '../Utils/Illustrations/Profile';
import {Device} from '../Utils/DeviceDimensions';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: Colors.lightdark1}}>
      <AppHeader
        middleText={'Profile'}
        left={{
          show: true,
          Icon: Hamburger,
          click: () => navigation.openDrawer(),
        }}
        right={{
          show: false,
        }}
      />
      <AppContainer>
        <View style={{alignItems: 'center'}}>
          <Profile width={Device.width / 1.5} height={Device.width / 1.5} />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.dark,
              fontFamily: PoppinsRegular,
            }}>
            First Name
          </Text>
          <Input placeholder="First Name" keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.dark,
              fontFamily: PoppinsRegular,
            }}>
            Last Name
          </Text>
          <Input placeholder="Last Name" keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.dark,
              fontFamily: PoppinsRegular,
            }}>
            Email Address (Optional)
          </Text>
          <Input
            placeholder="Email Address (Optional)"
            keyboardType="default"
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.dark,
              fontFamily: PoppinsRegular,
            }}>
            Phone Number
          </Text>
          <Input placeholder="Phone Number" keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.dark,
              fontFamily: PoppinsRegular,
            }}>
            Current Standard
          </Text>
          <PressableInput
            placeholder="Current Standard"
            iconRight={<ChevronRight width="18px" height="18px" />}
            onPress={null}
          />
        </View>
        <View style={{marginBottom: 5}}>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 18,
              fontWeight: '500',
              color: Colors.dark,
              fontFamily: PoppinsRegular,
            }}>
            Occupation
          </Text>
          <PressableInput
            placeholder="Occupation"
            iconRight={<ChevronRight width="18px" height="18px" />}
            onPress={null}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button buttonText={'Update Profile'} onPress={null} />
        </View>
      </AppContainer>
    </ScrollView>
  );
};

export default ProfileScreen;
