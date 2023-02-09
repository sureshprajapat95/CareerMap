import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import Input, { PressableInput } from '../Components/Input';
import ChevronRight from '../Icons/Chevrons';
import {Colors} from '../Utils/Colors';

const ProfileScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: Colors.lightdark1, paddingTop: 20}}>
      <AppContainer>
        <View style={{marginBottom: 5}}>
          <Text style={{marginBottom: 5,fontSize: 18,fontWeight: '500',color: Colors.dark}}>First Name</Text>
          <Input placeholder='First Name' keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text style={{marginBottom: 5,fontSize: 18,fontWeight: '500',color: Colors.dark}}>Last Name</Text>
          <Input placeholder='Last Name' keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text style={{marginBottom: 5,fontSize: 18,fontWeight: '500',color: Colors.dark}}>Email Address (Optional)</Text>
          <Input placeholder='Email Address (Optional)' keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text style={{marginBottom: 5,fontSize: 18,fontWeight: '500',color: Colors.dark}}>Phone Number</Text>
          <Input placeholder='Phone Number' keyboardType="default" />
        </View>
        <View style={{marginBottom: 5}}>
          <Text style={{marginBottom: 5,fontSize: 18,fontWeight: '500',color: Colors.dark}}>Current Standard</Text>
          <PressableInput placeholder='Current Standard' iconRight={<ChevronRight width="18px" height="18px" />} onPress={null} />
        </View>
        <View style={{marginBottom: 5}}>
          <Text style={{marginBottom: 5,fontSize: 18,fontWeight: '500',color: Colors.dark}}>Occupation</Text>
          <PressableInput placeholder='Occupation' iconRight={<ChevronRight width="18px" height="18px" />} onPress={null} />
        </View>
        <View style={{marginTop: 10}}>
            <Button buttonText={'Update Profile'} onPress={null} />
        </View>
      </AppContainer>
    </ScrollView>
  );
};

export default ProfileScreen;
