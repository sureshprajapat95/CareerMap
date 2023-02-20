import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors} from '../Utils/Colors';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import AppHeader from '../Components/AppHeader';
import {ChevronLeft} from '../Utils/Icons/Chevrons';
import OTP from '../Utils/Illustrations/OTP';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import {Call} from '../Service/Api';
import { AuthContext } from '../Context/auth-context';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../Utils/Loader';

const OTPScreen = ({navigation, route}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {authenticate} = React.useContext(AuthContext)
  const {phone_number} = route.params;
  const INITIAL_STATE = {
    mobile: phone_number,
    otp: '',
    dial_code: '+91',
  };
  console.log(INITIAL_STATE);
  const [states, setStates] = React.useState(INITIAL_STATE);

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(false);
    }, []),
  );

  const verifyOTPHandler = async () => {
    if (states.otp.length == 6) {
      setIsLoading(true);
      const payload = {
        phone_number: states.mobile,
        dial_code: states.dial_code,
        otp: states.otp,
      };
      try{
        const response = await Call('verifyOTP',payload);
        setIsLoading(false);
        if(response.data.success){
          authenticate(response.data.data[0].accessToken);
          /* navigation.navigate('mainhome'); */
        }else{
          Alert.alert(`${states.otpCode} Enter correct otp`);
        }
      }catch(err){
        setIsLoading(false);
      }
    } else {
      Alert.alert(`${states.otpCode} Enter correct otp`);
    }
  };
  return (
    <>
      <Loader visible={isLoading} />
      <AppHeader
        middleText={'Verify OTP'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
      <ScrollView>
        <AppContainer>
          <View style={{alignItems: 'center'}}>
            <OTP width={Device.width / 1.5} height={Device.width / 1.5} />
          </View>
          <OTPInputView
            style={{width: '100%', height: 100}}
            pinCount={6}
            onCodeChanged={code => {
              setStates(prev => {
                return {
                  ...prev,
                  otp: code,
                };
              });
            }}
            autoFocusOnLoad={false}
            codeInputFieldStyle={styles.styleBase}
            codeInputHighlightStyle={styles.styleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <Button buttonText={'Verify'} onPress={verifyOTPHandler} />
        </AppContainer>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  styleBase: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: Colors.lightdark,
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.Medium,
  },

  styleHighLighted: {
    borderColor: Colors.primary,
  },
});

export default OTPScreen;
