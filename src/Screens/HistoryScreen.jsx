import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Hamburger from '../Utils/Icons/Hamburger';
import History from '../Utils/Illustrations/History';

const HistoryScreen = ({navigation}) => {
  return (
    <>
      <AppHeader
        middleText={'History'}
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
          <View style={{alignItems: 'center'}}>
            <History width={Device.width / 2} height={Device.width / 2} />
          </View>
          <View style={{position: 'relative', paddingTop: 20}}>
            <View
              style={{
                backgroundColor: Colors.primary,
                position: 'absolute',
                width: 2,
                top: 30,
                left: 10,
                bottom: 30,
              }}></View>

            <View
              style={{
                borderRadius: 10,
                padding: 10,
                marginBottom: 30,
                position: 'relative',
                marginLeft: 25,
                paddingTop: 0,
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: Colors.primary,
                  position: 'absolute',
                  left: -21,
                  top: 3,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroundColor,
                  }}></View>
              </View>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 18}}>
                04 Jan 2023
              </Text>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 15}}>
                Account created successfully.
              </Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                padding: 10,
                marginBottom: 30,
                position: 'relative',
                marginLeft: 25,
                paddingTop: 0,
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: Colors.primary,
                  position: 'absolute',
                  left: -21,
                  top: 3,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroundColor,
                  }}></View>
              </View>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 18}}>
                05 Jan 2023
              </Text>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 15}}>
                Trial Activated
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Medium,
                  fontSize: 13,
                  paddingVertical: 10,
                }}>
                You account is setup for trial from 05 Jan 2023 to 04 Feb 2023.
                You can buy a paid plan anytime. You have 29 days left.
              </Text>
            </View>
            <View
              style={{
                borderRadius: 10,
                padding: 10,
                marginBottom: 30,
                position: 'relative',
                marginLeft: 25,
                paddingTop: 0,
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: Colors.primary,
                  position: 'absolute',
                  left: -21,
                  top: 3,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroundColor,
                  }}></View>
              </View>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 18}}>
                06 Feb 2023
              </Text>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 15}}>
                Trial Expired
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Medium,
                  fontSize: 13,
                  paddingVertical: 10,
                }}>
                Your trial period is over now. You can now buy a paid plan to
                continue using all the features. Click the button below to buy a
                plan.{' '}
              </Text>
              <Button buttonText={'Buy Now'} buttonStyle={{width: Device.width / 2}} onPress={()=> navigation.navigate('payment')} />
            </View>
            <View
              style={{
                borderRadius: 10,
                padding: 10,
                marginBottom: 30,
                position: 'relative',
                marginLeft: 25,
                paddingTop: 0,
              }}>
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: Colors.primary,
                  position: 'absolute',
                  left: -21,
                  top: 3,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroundColor,
                  }}></View>
              </View>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 18}}>
                09 Feb 2023
              </Text>
              <Text style={{fontFamily: Fonts.Bold, fontSize: 15}}>
                Purchase Successful
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Medium,
                  fontSize: 13,
                  paddingVertical: 10,
                }}>
                You have successfully purchased a plan successfully. Your plan is expiring on 08 July 2023. You can now enjoy using our services. 
              </Text>
            </View>
          </View>
          {/* <Button
            onPress={() => navigation.navigate('payment')}
            buttonText="Buy Now"
          /> */}
        </AppContainer>
      </ScrollView>
    </>
  );
};

export default HistoryScreen;
