import React from 'react';
import {View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import {Device} from '../Utils/DeviceDimensions';
import {ButtonHalfWidth} from '../Components/Button';
import AppHeader from '../Components/AppHeader';
import Hamburger from '../Utils/Icons/Hamburger';
import Login from '../Utils/Icons/Login';
import { Colors } from '../Utils/Colors';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <AppHeader
      style={{backgroundColor: Colors.light}}
      middleText={'Home'}
        left={{
          show: true,
          Icon: Hamburger,
          click: () => navigation.openDrawer(),
        }}
        right={{
          show: true,
          Icon: Login,
          click: () => navigation.navigate('login'),
        }}
      />
      <ScrollView
        style={{
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: (Device.height * 5) / 7,
          }}>
          <WebView
            style={{flex: 1, width: Device.width, height: 100}}
            source={{uri: 'https://careermaps.live?caller=app'}}
          />
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              marginTop: 20,
              height: (Device.height * 2) / 7,
              alignItems: 'baseline',
              justifyContent: 'space-evenly',
            }}>
            <ButtonHalfWidth
              buttonText={'Career Path Finder'}
              onPress={null}
              style={{marginRight: 10}}
            />
            <ButtonHalfWidth buttonText={'Rank'} onPress={null} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

{
  /* 
  const [buttonType, setButtonType] = React.useState(false);
  <Pressable
        onPressIn={() => {
          console.log('a'), setButtonType(prev => !prev);
        }}
        onPressOut={() => {
          console.log('a'), setButtonType(prev => !prev);
        }}>
        <Neomorph
          inner={buttonType}
          style={{
            shadowRadius: 5,
            borderRadius: 250,
            backgroundColor: '#eee',
            width: 150,
            height: 150,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Home</Text>
        </Neomorph>
      </Pressable> */
}
