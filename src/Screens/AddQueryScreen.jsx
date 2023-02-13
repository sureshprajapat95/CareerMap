import React from 'react';
import {TextInput, Pressable, Text, ScrollView, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import Input, {TextArea} from '../Components/Input';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import {ChevronLeft} from '../Utils/Icons/Chevrons';
import Other from '../Utils/Icons/Other';
import AddQuery from '../Utils/Illustrations/AddQuery';

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

const AddQueryScreen = ({navigation}) => {
  const [states, setStates] = React.useState(INITIAL_STATE);
  const handleType = type => {
    setStates(prev => {
      return {...prev, type: type};
    });
  };
  return (
    <>
      <AppHeader
        middleText={'Add Query'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
      <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
        <View style={{alignItems: 'center'}}>
          <AddQuery width={Device.width / 2} height={Device.width / 2} />
        </View>
        <AppContainer>
          <Text
            style={{fontSize: 20, fontFamily: Fonts.Bold, marginBottom: 15}}>
            Query Type
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Pressable
              onPress={() => {
                handleType('query');
              }}>
              <Neomorph
                inner={states.type === 'query' || false}
                style={{
                  shadowRadius: 4,
                  borderRadius: Device.width / 3.5,
                  backgroundColor: Colors.backgroundColor,
                  width: Device.width / 3.5,
                  height: Device.width / 3.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  marginBottom: 20,
                  marginRight: 20,
                }}>
                <Other
                  width={'40px'}
                  height={'40px'}
                  fill={states.type === 'query' ? Colors.primary : Colors.dark}
                />
                <Text
                  style={{
                    fontFamily: Fonts.Medium,
                    fontSize: 16,
                    color:
                      states.type === 'query' ? Colors.primary : Colors.dark,
                  }}>
                  Query
                </Text>
              </Neomorph>
            </Pressable>
            <Pressable
              onPress={() => {
                handleType('counsellor');
              }}>
              <Neomorph
                inner={states.type === 'counsellor' || false}
                style={{
                  shadowRadius: 4,
                  borderRadius: Device.width / 3.5,
                  backgroundColor: Colors.backgroundColor,
                  width: Device.width / 3.5,
                  height: Device.width / 3.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  marginBottom: 20,
                  marginRight: 20,
                }}>
                <Other
                  width={'40px'}
                  height={'40px'}
                  fill={
                    states.type === 'counsellor' ? Colors.primary : Colors.dark
                  }
                />
                <Text
                  style={{
                    fontFamily: Fonts.Medium,
                    fontSize: 16,
                    color:
                      states.type === 'counsellor'
                        ? Colors.primary
                        : Colors.dark,
                  }}>
                  Counsellor
                </Text>
              </Neomorph>
            </Pressable>
          </View>
          <View style={{marginBottom: 10}}>
            <Input placeholder="Phone Number" keyboardType={'numeric'} />
          </View>
          <View style={{marginBottom: 10}}>
            <TextArea placeholder="Phone Number" />
          </View>
          <View>
            <Button buttonText={'Add'} />
          </View>
        </AppContainer>
      </ScrollView>
    </>
  );
};

export default AddQueryScreen;
