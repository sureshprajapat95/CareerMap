import React from 'react';
import {Text, View} from 'react-native';
import WebView from 'react-native-webview';
import AppHeader from '../Components/AppHeader';
import {Device} from '../Utils/DeviceDimensions';
import { ChevronLeft } from '../Utils/Icons/Chevrons';
import Loader from '../Utils/Loader';

const UrlOpenerScreen = ({navigation, route}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const {uri,title} = route.params;

  return (
    <>
    <AppHeader
      middleText={title}
      left={{
        show: true,
        Icon: ChevronLeft,
        click: () => navigation.goBack(),
      }}
      right={{
        show: false,
      }}
    />
    <View style={{flex: 1,marginTop: -10}}>

      <Loader visible={isLoading} />
      <WebView
        style={{flex: 1, width: Device.width, height: 100}}
        source={{uri}}
        onLoadProgress={() => {console.log('loading'),setIsLoading(true)}}
        onLoadEnd={() => {console.log('loading-end'),setIsLoading(false)}}
      />
    </View>
    </>
  );
};

export default UrlOpenerScreen;
