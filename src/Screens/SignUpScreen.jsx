import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import AppContainer from '../Components/AppContainer';
import Input, {PressableInput} from '../Components/Input';
import Calendar from '../Utils/Icons/Calendar';
import ChevronRight, {ChevronLeft} from '../Utils/Icons/Chevrons';
import Button from '../Components/Button';
import {Colors} from '../Utils/Colors';
import {Neomorph} from 'react-native-neomorph-shadows';
import Male from '../Utils/Icons/Male';
import Female from '../Utils/Icons/Female';
import Other from '../Utils/Icons/Other';
import PointingHand from '../Utils/Icons/PointingHand';
import AppHeader from '../Components/AppHeader';
import SignUp from '../Utils/Illustrations/SignUp';
import {Device} from '../Utils/DeviceDimensions';

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
  mobile_number: '',
  email: '',
  gender: '',
  dob: '',
  current_standart: '',
  aim_occupation: '',
};

const SignUpScreen = ({navigation}) => {
  const [states, setStates] = React.useState(INITIAL_STATE);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  const handleGender = type => {
    setStates(prev => {
      return {...prev, gender: type};
    });
  };

  return (
    <>
      <AppHeader
        middleText={'Sign Up'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
      <ScrollView
        style={{flex: 1, backgroundColor: '#fff', position: 'relative'}}>
        <AppContainer>
          <View
            style={{
              marginTop: 40,
              borderColor: Colors.primary,
              borderWidth: 2,
              borderRadius: 4,
              padding: 20,
            }}>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View>
                <PointingHand />
              </View>
              <View style={{paddingLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.dark,
                    }}>
                    Mentors
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      color: Colors.dark,
                    }}>
                    Free mentoring per week
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View>
                <PointingHand />
              </View>
              <View style={{paddingLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.dark,
                    }}>
                    Remote Learning
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View>
                <PointingHand />
              </View>
              <View style={{paddingLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.dark,
                    }}>
                    Unlimited counseling
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      color: Colors.dark,
                    }}>
                    From India's best Counselors
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View>
                <PointingHand />
              </View>
              <View style={{paddingLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.dark,
                    }}>
                    Specialised English Communication
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      color: Colors.dark,
                    }}>
                    session
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View>
                <PointingHand />
              </View>
              <View style={{paddingLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.dark,
                    }}>
                    Watch videos
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      color: Colors.dark,
                    }}>
                    1000+ hours of engages videos containing all syllabus
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 15}}>
              <View>
                <PointingHand />
              </View>
              <View style={{paddingLeft: 20}}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: '600',
                      color: Colors.dark,
                    }}>
                    Career Maps
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '400',
                      color: Colors.dark,
                    }}>
                    400+ Careers on one platform
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <SignUp width={Device.width / 1.5} height={Device.width / 1.5} />
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: '600', color: Colors.dark}}>
              Register with below details
            </Text>
            <View style={{marginTop: 20}}>
              <Input keyboardType={'default'} placeholder={'First Name'} />
              <Input keyboardType={'default'} placeholder={'Last Name'} />
              <Input
                keyboardType={'number-pad'}
                placeholder={'Phone Number'}
                customText={true}
              />
              <Input
                keyboardType={'email-address'}
                placeholder={'Email Address (Optional)'}
              />
              <View>
                <Text
                  style={{
                    color: Colors.dark,
                    fontSize: 18,
                    fontWeight: '600',
                    marginBottom: 10,
                  }}>
                  Gender
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <Pressable
                    onPress={() => {
                      handleGender('male');
                    }}>
                    <Neomorph
                      inner={states.gender === 'male' || false}
                      style={{
                        shadowRadius: 5,
                        borderRadius: 35,
                        backgroundColor: '#eee',
                        width: 45,
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        marginBottom: 20,
                        marginRight: 20,
                      }}>
                      <Male width={30} height={30} />
                    </Neomorph>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      handleGender('female');
                    }}>
                    <Neomorph
                      inner={states.gender === 'female' || false}
                      style={{
                        shadowRadius: 5,
                        borderRadius: 35,
                        backgroundColor: '#eee',
                        width: 45,
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        marginBottom: 20,
                        marginRight: 20,
                      }}>
                      <Female width={30} height={30} />
                    </Neomorph>
                  </Pressable>
                  <Pressable
                    onPress={() => {
                      handleGender('other');
                    }}>
                    <Neomorph
                      inner={states.gender === 'other' || false}
                      style={{
                        shadowRadius: 4,
                        borderRadius: 35,
                        backgroundColor: '#eee',
                        width: 45,
                        height: 45,
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        marginBottom: 20,
                        marginRight: 20,
                      }}>
                      <Other />
                    </Neomorph>
                  </Pressable>
                </View>
              </View>
              <PressableInput
                placeholder={'Select DOB'}
                onPress={() =>
                  DateTimePickerAndroid.open({
                    value: new Date(),
                    onChange: e => {} /* onChange(e, type) */,
                    mode: 'date',
                  })
                }
                iconRight={<Calendar width="25px" height="25px" />}
              />
              <PressableInput
                placeholder={'Current Standart'}
                onPress={() =>
                  DateTimePickerAndroid.open({
                    value: new Date(),
                    onChange: e => {} /* onChange(e, type) */,
                    mode: 'date',
                  })
                }
                iconRight={<ChevronRight width="18px" height="18px" />}
              />
              <PressableInput
                placeholder={'Select Destination/Aim Occupation'}
                onPress={() =>
                  DateTimePickerAndroid.open({
                    value: new Date(),
                    onChange: e => {} /* onChange(e, type) */,
                    mode: 'date',
                  })
                }
                iconRight={<ChevronRight width="18px" height="18px" />}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  tintColors={{true: Colors.primary, false: Colors.lightdark}}
                />
                <Text>
                  By sigining you agree,{' '}
                  <Text style={{color: Colors.primary, fontWeight: '600'}}>
                    T&C
                  </Text>{' '}
                  and{' '}
                  <Text style={{color: Colors.primary, fontWeight: '600'}}>
                    Privacy Policy
                  </Text>
                </Text>
              </View>
              <Button
                buttonText={'Create an account'}
                onPress={() => navigation.navigate('otp')}
              />
              <Pressable
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  paddingVertical: 20,
                }}
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: Colors.dark,
                  }}>
                  Already have an Account?
                </Text>
                <Text
                  style={{
                    color: Colors.primary,
                    fontSize: 18,
                    fontWeight: '600',
                    paddingLeft: 10,
                  }}>
                  Sign in
                </Text>
              </Pressable>
            </View>
          </View>
        </AppContainer>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
