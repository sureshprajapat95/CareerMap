import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import AppContainer from '../Components/AppContainer';
import Input from '../Components/Input';
import {Device} from '../Utils/DeviceDimensions';
import Button from '../Components/Button';
import ChevronRight from '../Utils/Icons/Chevrons';
import Separator from '../Components/Separator';
import TabHeader from '../Components/TabHeader';
import {AuthContext} from '../Context/auth-context';
import NoLogin from '../Components/NoLogin';
import { Colors } from '../Utils/Colors';
import { Fonts } from '../Utils/Fonts';

const PaymentScreen = ({navigation}) => {
  const {isAuthenticated} = useContext(AuthContext);
  return (
    <>
      <TabHeader
        leftClick={() => navigation.openDrawer()}
        navigation={navigation}
        title={'Plans'}
        color={isAuthenticated ? Colors.backgroundColor : Colors.light}
      />
      {isAuthenticated ? (
        <View style={{flex: 1}}>
          <AppContainer>
            <View style={{paddingTop: 20}}>
              <Text style={{fontFamily: Fonts.Medium,fontSize: 18}}>Already have a coupon code?</Text>
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
                  icon={<ChevronRight fill={Colors.light} />}
                  buttonText=""
                  buttonStyle={{width: 50, shadowRadius: 3}}
                />
              </View>
            </View>
            <Separator text={'OR'} />
            <View>
              <Text style={{fontFamily: Fonts.Medium,fontSize: 16}}>
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
              <Text style={{fontFamily: Fonts.Medium,fontSize: 16}}>
                You can also purchase a paid plan also. Tap button below to
                check our plans.{' '}
              </Text>
              <Button
                icon=""
                buttonText="Buy Now"
                buttonStyle={{width: 150, shadowRadius: 3, marginTop: 20}}
              />
            </View>
          </AppContainer>
        </View>
      ) : (
        <NoLogin navigation={navigation} />
      )}
    </>
  );
};

export default PaymentScreen;
