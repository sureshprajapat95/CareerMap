import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors} from '../Utils/Colors';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import AppHeader from '../Components/AppHeader';
import {ChevronLeft} from '../Utils/Icons/Chevrons';
import OTP from '../Utils/Illustrations/OTP';
import {Device} from '../Utils/DeviceDimensions';
import { Fonts } from '../Utils/Fonts';

const INITIAL_STATE = {
  otpCode: '',
  buttonDisabled: true,
};

const OTPScreen = ({navigation}) => {
  const [states, setStates] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    console.log(states);
  }, [states]);
  return (
    <>
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
          <OTP width={Device.width - 50} height={Device.width - 50} />
          <OTPInputView
            style={{width: '100%', height: 200}}
            pinCount={6}
            onCodeChanged={code => {
              setStates(prev => {
                return {
                  ...prev,
                  otpCode: code,
                  buttonDisabled: code.length === 6 ? false : true,
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
          <Button
            buttonText={'Verify'}
            onPress={() => navigation.navigate('mainhome')}
          />
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
    fontFamily: Fonts.Medium
  },

  styleHighLighted: {
    borderColor: Colors.primary,
  },
});

export default OTPScreen;
