import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Plan from '../Components/Plan/Plan';
import {Call} from '../Service/Api';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {ChevronLeft} from '../Utils/Icons/Chevrons';
import AddQuery from '../Utils/Illustrations/AddQuery';
import Plans from '../Utils/Illustrations/Plans';
import Loader from '../Utils/Loader';

const PlanScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      getPlans();
    }, []),
  );

  const getPlans = async () => {
    try {
      const response = await Call('getPlans', {});
      console.log(response.data);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const Data = [
    {
      id: 1,
      title: 'First Screen',
      description: 'First screen test description',
      image: <AddQuery width={Device.width - 100} height={Device.width - 100} />,
      backgroundColor: Colors.primary
    },
    {
      id: 2,
      title: 'Second Screen',
      description: 'Second screen test description',
      image: <AddQuery width={Device.width - 100} height={Device.width - 100} />,
      backgroundColor: Colors.primaryAlfa
    },
    {
      id: 3,
      title: 'Third Screen',
      description: 'Third screen test description',
      image: <AddQuery width={Device.width - 100} height={Device.width - 100} />,
      backgroundColor: Colors.primary
    },
    /* {
      id: 4,
      title: 'Fourth Screen',
      description: 'Fourth screen test description',
      image: require('../assets/app_logo.png'),
      backgroundColor: Colors.primaryAlfa
    }, */
  ];

  return (
    <>
      <Loader visible={isLoading} />
      <AppHeader
        middleText={'Plans'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
      <View style={{flex: 1,backgroundColor: Colors.lightdark1}}>
        <AppContainer style={{paddingBottom: 0,flex: 0.5}}>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Plans width={Device.width / 2.5} height={Device.width / 2.5} />
          </View>
        </AppContainer>
        
        <Plan SLIDES={Data} />
      </View>
    </>
  );
};
export default PlanScreen;
