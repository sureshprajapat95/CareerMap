import {useFocusEffect} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, ScrollView, View} from 'react-native';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import NoLogin from '../Components/NoLogin';
import QueryBox from '../Components/QueryBox';
import QueryDetails from '../Components/QueryDetails';
import TabHeader from '../Components/TabHeader';
import {AuthContext} from '../Context/auth-context';
import {Call} from '../Service/Api';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Add from '../Utils/Icons/Add';
import Loader from '../Utils/Loader';

const QueryScreen = ({navigation}) => {
  const {isAuthenticated, token} = useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const [query, setQuery] = React.useState([]);

  getQueries = async () => {
    try {
      setIsLoading(true);
      const response = await Call('queryList', {});
      setIsLoading(false);
      if (response.data.success) {
        setQuery(response.data.data);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (token) {
        getQueries();
      }
    }, []),
  );

  const openQuery = id => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowDetails(true);
    }, 1500);
  };

  return (
    <>
      <Loader visible={isLoading} />
      <QueryDetails
        visible={showDetails}
        onClose={() => setShowDetails(false)}
      />
      <TabHeader
        leftClick={() => navigation.openDrawer()}
        title={'Query'}
        navigation={navigation}
      />
      {isAuthenticated ? (
        <ScrollView>
          <AppContainer>
            <View style={{alignItems: 'flex-end', paddingTop: 15}}>
              <Button
                buttonText={'Add'}
                buttonStyle={{
                  width: Device.width / 3,
                  backgroundColor: Colors.backgroundColor,
                }}
                textStyle={{
                  color: Colors.primary,
                  fontFamily: Fonts.SemiBold,
                  paddingLeft: 10,
                }}
                icon={<Add fill={Colors.primary} />}
                onPress={() => navigation.navigate('addquery')}
              />
            </View>
            {query.length &&
              query.map((item, index) => {
                return (
                  <QueryBox
                    status={'Open'}
                    key={index}
                    onPress={() => openQuery()}
                  />
                );
              })}
          </AppContainer>
        </ScrollView>
      ) : (
        <NoLogin navigation={navigation} />
      )}
    </>
  );
};

export default QueryScreen;
