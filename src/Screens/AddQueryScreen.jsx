import React from 'react';
import {Pressable, Text, ScrollView, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import Input, {PressableInput, TextArea} from '../Components/Input';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import {ChevronLeft} from '../Utils/Icons/Chevrons';
import AddQuery from '../Utils/Illustrations/AddQuery';
import DocumentPicker from 'react-native-document-picker';
import {Call} from '../Service/Api';
import Message from '../Utils/Icons/Message';
import Counsellor from '../Utils/Icons/Counsellor';

const INITIAL_STATE = {
  phone_number: '',
  type: '',
  question: '',
};

const AddQueryScreen = ({navigation}) => {
  const [states, setStates] = React.useState(INITIAL_STATE);
  const handleType = type => {
    setStates(prev => {
      return {...prev, type: type};
    });
  };

  async function pickDocument() {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(result);
      let fileObj = {
        uri: result[0].uri,
        name: result[0].name,
        contentType: result[0].type,
      };
      setStates(prev => ({...prev, file: fileObj}));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
      }
    }
  }

  const addQuery = () => {
    Call('queryAdd', {...states})
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err.response.data));
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
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              flex: 1,
              justifyContent: 'space-evenly',
            }}>
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
                <Message
                  width={'30px'}
                  height={'30px'}
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
                <Counsellor
                  width={'30px'}
                  height={'30px'}
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
            <Input
              onChangeText={text =>
                setStates(prev => ({...prev, phone_number: text}))
              }
              value={states.phone_number}
              placeholder="Phone Number"
              keyboardType={'numeric'}
            />
          </View>
          <View style={{marginBottom: 10}}>
            <TextArea
              placeholder="Comment"
              value={states.question}
              onChangeText={text =>
                setStates(prev => ({...prev, question: text}))
              }
            />
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <PressableInput
              placeholder={'Select file'}
              neomorphStyle={{width: Device.width / 2}}
              onPress={pickDocument}
            />
          </View>
          <View>
            <Button buttonText={'Add'} onPress={addQuery} />
          </View>
        </AppContainer>
      </ScrollView>
    </>
  );
};

export default AddQueryScreen;
