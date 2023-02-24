import React, {useContext} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import {Device} from '../Utils/DeviceDimensions';
import {ButtonHalfWidth} from '../Components/Button';
import TabHeader from '../Components/TabHeader';
import {useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../Context/auth-context';
import Toast from '../Utils/Toast';

const HomeScreen = ({navigation}) => {
  const {token} = useContext(AuthContext);

  return (
    <>
      <TabHeader
        leftClick={() => navigation.openDrawer()}
        navigation={navigation}
        title={'Home'}
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
