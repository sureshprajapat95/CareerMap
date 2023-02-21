import React, {useContext} from 'react';

import {ScrollView, Text, View} from 'react-native';
import AppHeader from '../Components/AppHeader';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import Input, {PressableInput} from '../Components/Input';
import ChevronRight, {ChevronLeft} from '../Utils/Icons/Chevrons';
import {Colors} from '../Utils/Colors';
import {PoppinsRegular} from '../Utils/Fonts';
import Profile from '../Utils/Illustrations/Profile';
import {Device} from '../Utils/DeviceDimensions';
import {Call} from '../Service/Api';
import {useFocusEffect} from '@react-navigation/native';
import {AuthContext} from '../Context/auth-context';
import NoLogin from '../Components/NoLogin';
import Loader from '../Utils/Loader';

const ProfileScreen = ({navigation}) => {
  const {token} = useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [profile, setProfile] = React.useState({});

  useFocusEffect(
    React.useCallback(() => {
      if (token) {
        getUserProfile();
      }
    }, []),
  );

  const getUserProfile = async () => {
    try {
      setIsLoading(true);
      const response = await Call('getPorfile', {});
      setIsLoading(false);
      setProfile(response.data.data[0]);
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data.message);
    }
  };

  React.useEffect(() => {
    console.log(profile);
  }, [profile]);

  return (
    <>
      <Loader visible={isLoading} />
      <AppHeader
        middleText={'Profile'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
      {token ? (
        <ScrollView style={{backgroundColor: Colors.lightdark1}}>
          <AppContainer>
            <View style={{alignItems: 'center'}}>
              <Profile width={Device.width / 1.5} height={Device.width / 1.5} />
            </View>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.dark,
                  fontFamily: PoppinsRegular,
                }}>
                First Name
              </Text>
              <Input
                placeholder="First Name"
                value={profile.first_name}
                keyboardType="default"
                onChangeText={text =>
                  setProfile(prev => ({...prev, first_name: text}))
                }
              />
            </View>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.dark,
                  fontFamily: PoppinsRegular,
                }}>
                Last Name
              </Text>
              <Input
                placeholder="Last Name"
                value={profile.last_name}
                keyboardType="default"
                onChangeText={text =>
                  setProfile(prev => ({...prev, last_name: text}))
                }
              />
            </View>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.dark,
                  fontFamily: PoppinsRegular,
                }}>
                Email Address (Optional)
              </Text>
              <Input
                placeholder="Email Address (Optional)"
                keyboardType="default"
                value={profile.email}
                onChangeText={text =>
                  setProfile(prev => ({...prev, email: text}))
                }
              />
            </View>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.dark,
                  fontFamily: PoppinsRegular,
                }}>
                Phone Number
              </Text>
              <Input
                placeholder="Phone Number"
                keyboardType="default"
                value={profile.phone_number}
                onChangeText={text =>
                  setProfile(prev => ({...prev, phone_number: text}))
                }
              />
            </View>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.dark,
                  fontFamily: PoppinsRegular,
                }}>
                Current Standard
              </Text>
              <PressableInput
                placeholder={
                  profile && profile.current_standard
                    ? profile.current_standard
                    : 'Current Standard'
                }
                iconRight={<ChevronRight width="18px" height="18px" />}
                onPress={null}
              />
            </View>
            <View style={{marginBottom: 5}}>
              <Text
                style={{
                  marginBottom: 5,
                  fontSize: 18,
                  fontWeight: '500',
                  color: Colors.dark,
                  fontFamily: PoppinsRegular,
                }}>
                Occupation
              </Text>
              <PressableInput
                placeholder={
                  profile && profile.occupation
                    ? profile.occupation
                    : 'Occupation'
                }
                iconRight={<ChevronRight width="18px" height="18px" />}
                onPress={null}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Button buttonText={'Update Profile'} onPress={null} />
            </View>
          </AppContainer>
        </ScrollView>
      ) : (
        <NoLogin navigation={navigation} />
      )}
    </>
  );
};

export default ProfileScreen;
