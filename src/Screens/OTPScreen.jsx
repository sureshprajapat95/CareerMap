import React from 'react';
import {StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Colors} from '../Utils/Colors';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';

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
    <AppContainer>
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
  },

  styleHighLighted: {
    borderColor: Colors.primary,
  },
});

export default OTPScreen;
