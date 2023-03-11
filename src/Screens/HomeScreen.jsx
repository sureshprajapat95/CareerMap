import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';
import {Device} from '../Utils/DeviceDimensions';
import Button, {ButtonHalfWidth} from '../Components/Button';
import TabHeader from '../Components/TabHeader';
import {AuthContext} from '../Context/auth-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const {token} = useContext(AuthContext);

  React.useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const res = await AsyncStorage.getItem('data_user');
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(res);
  };

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
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingTop: 20,
              paddingBottom: 105,
            }}>
            <View style={{flex: 1}}>
              <Button
                buttonText={'Career Path Finder'}
                buttonStyle={{width: Device.width / 2}}
                onPress={() =>
                  navigation.navigate('webopener', {
                    uri: `https://careermaps.live/career-path-finder?caller=app&token=${token}`,
                    title: 'Career Path Finder',
                  })
                }
              />
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Button
                buttonText={'Rank'}
                buttonStyle={{width: Device.width / 2.5}}
                onPress={() =>
                  navigation.navigate('webopener', {
                    uri: `https://careermaps.live/rank?caller=app&token=${token}`,
                    title: 'Rank',
                  })
                }
              />
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
