import {ScrollView, View, Text} from 'react-native';
import React from 'react';
import AppHeader from '../Components/AppHeader';
import Hamburger from '../Utils/Icons/Hamburger';
import AppContainer from '../Components/AppContainer';
import Input from '../Components/Input';
import {Device} from '../Utils/DeviceDimensions';
import Button from '../Components/Button';
import ChevronRight, {ChevronLeft} from '../Utils/Icons/Chevrons';
import {Colors} from '../Utils/Colors';
import Separator from '../Components/Separator';

const PaymentScreen = ({navigation}) => {
  return (
    <>
      <AppHeader
        middleText={'Purchase Plan'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
      <View style={{flex: 1}}>
        <AppContainer>
          <View style={{paddingTop: 20}}>
            <Text>Already have a coupon code?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 25,
              }}>
              <Input
                placeholder="Coupon code"
                style={{width: (Device.width * 2) / 3}}
              />
              <Button
                icon={<ChevronRight />}
                buttonText=""
                buttonStyle={{width: 50, shadowRadius: 3}}
              />
            </View>
          </View>
          <Separator text={'OR'} />
          <View>
            <Text>
              You have trial available to use all features for 30 days. Tap
              button below to start your trial.
            </Text>
            <Button
              icon=""
              buttonText="Start Trial"
              buttonStyle={{width: 150, shadowRadius: 3, marginTop: 20}}
            />
          </View>
          <Separator text={'OR'} />
          <View>
            <Text>
              You can also purchase a paid plan also. Tap button below to check
              our plans.{' '}
            </Text>
            <Button
              icon=""
              buttonText="Buy Now"
              buttonStyle={{width: 150, shadowRadius: 3, marginTop: 20}}
            />
          </View>
        </AppContainer>
      </View>
    </>
  );
};

export default PaymentScreen;
