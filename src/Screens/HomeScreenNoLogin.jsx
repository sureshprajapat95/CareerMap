//HomeScreenNoLogin
import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import {Device} from '../Utils/DeviceDimensions';
import {ButtonHalfWidth} from '../Components/Button';
import TabHeader from '../Components/TabHeader';
import {AuthContext} from '../Context/auth-context';
import Login from '../Utils/Icons/Login';
import AppHeader from '../Components/AppHeader';
import { Colors } from '../Utils/Colors';
import Hamburger from '../Utils/Icons/Hamburger';

const HomeScreenNoLogin = ({navigation}) => {
  const {token} = useContext(AuthContext);

  const handleRightClick = () => {
      navigation.navigate('login');
  };

  return (
    <>
      <AppHeader
        style={{backgroundColor: Colors.light}}
        middleText={'Home'}
        left={{
          show: false,
        }}
        right={{
          show: true,
          Icon: Login,
          click: handleRightClick,
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
        {token ? (
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
                onPress={() => {
                  console.log(token),
                    navigation.navigate('webopener', {
                      uri: `https://careermaps.live/career-path-finder?caller=app&token=${token}`,
                      title: 'Career Path Finder',
                    });
                }}
                style={{marginRight: 10}}
              />
              <ButtonHalfWidth buttonText={'Rank'} onPress={null} />
            </View>
          </View>
        ) : (
          ''
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreenNoLogin;
