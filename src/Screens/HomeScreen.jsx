import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {Device} from '../Utils/DeviceDimensions';
import Button, {ButtonHalfWidth} from '../Components/Button';

const HomeScreen = ({navigation}) => {
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('login')}
          buttonStyle={{
            marginRight: 20,
            width: 80,
            height: 35,
            borderRadius: 10,
          }}
          textStyle={{
            textAlign: 'center',
          }}
          buttonText={'Sign In'}></Button>
      ),
    });
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <WebView
          style={{flex: 1, width: Device.width, height: 100}}
          source={{uri: 'https://careermaps.live?caller=app'}}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ButtonHalfWidth
            buttonText={'Career Path Finder'}
            onPress={null}
            style={{marginRight: 10}}
          />
          <ButtonHalfWidth buttonText={'Rank'} onPress={null} />
        </View>
      </View>
    </View>
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
