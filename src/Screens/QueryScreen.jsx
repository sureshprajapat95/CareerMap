import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {Text,ScrollView, View} from 'react-native';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import QueryBox from '../Components/QueryBox';
import QueryDetails from '../Components/QueryDetails';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Add from '../Utils/Icons/Add';
import Hamburger from '../Utils/Icons/Hamburger';
import Loader from '../Utils/Loader';

const QueryScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      /* navigation.navigate('login') */
    }, []),
  );

  const openQuery = id => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDetails(true);
    }, 1500);
  };

  return <><Text>You are not logged in</Text></>

  return (
    <>
      <Loader visible={isLoading} />
      <QueryDetails
        visible={showDetails}
        onClose={() => setShowDetails(false)}
      />
      <AppHeader
        middleText={'Query'}
        left={{
          show: true,
          Icon: Hamburger,
          click: () => navigation.openDrawer(),
        }}
        right={{
          show: false,
        }}
      />
      <ScrollView>
        <AppContainer>
          <View style={{alignItems: 'flex-end', paddingTop: 15}}>
            <Button
              buttonText={'Add'}
              buttonStyle={{
                width: Device.width / 3,
                backgroundColor: Colors.backgroundColor,
              }}
              textStyle={{
                color: Colors.primary,
                fontFamily: Fonts.SemiBold,
                paddingLeft: 10,
              }}
              icon={<Add fill={Colors.primary} />}
              onPress={() => navigation.navigate('addquery')}
            />
          </View>
          <QueryBox status={'Open'} onPress={() => openQuery()} />
          <QueryBox status={'Closed'} onPress={() => openQuery()} />
          <QueryBox status={'Open'} onPress={() => openQuery()} />
        </AppContainer>
      </ScrollView>
    </>
  );
};

export default QueryScreen;
