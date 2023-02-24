import {useFocusEffect} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Text, ScrollView, View} from 'react-native';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import NoLogin from '../Components/NoLogin';
import QueryBox from '../Components/QueryBox';
import QueryDetails from '../Components/QueryDetails';
import TabHeader from '../Components/TabHeader';
import {ToastMessage} from '../Components/Toastify';
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
        // ToastMessage('success', 'Success', response.data.message);
        setQuery(response.data.data);
      }
    } catch (err) {
      setIsLoading(false);
      ToastMessage('error', 'Error', err.response.data.message);
      console.log(err.response.data);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log('isAuthenticated'+isAuthenticated)
      if (isAuthenticated) {
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
        color={isAuthenticated ? Colors.backgroundColor : Colors.light}
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

            {query.length ?
              query.map((item, index) => {
                return (
                  <QueryBox
                    status={'Open'}
                    key={index}
                    data={item}
                    onPress={() => openQuery()}
                  />
                );
              }) : ''}
            {/* <QueryBox
              status={'Open'}
              key={'index'}
              data={{
                __v: 0,
                _id: '62e0e65770c0cdc187763bf3',
                createdAt: '2022-07-27T07:16:39.732Z',
                filePath: '/api/query/62e0e65770c0cdc187763bf3/download',
                phone_number: '1231234565',
                question: 'looks great',
                repliedBy: '62de8a586bc6df5851f38552',
                reply: 'NA',
                status: 'cancelled',
                type: 'query',
                updatedAt: '2022-07-27T08:12:38.608Z',
                user: '62ded2c9176c19c8b589d568',
              }}
              onPress={() => openQuery()}
            /> */}
          </AppContainer>
        </ScrollView>
      ) : (
        <NoLogin navigation={navigation} />
      )}
    </>
  );
};

export default QueryScreen;
