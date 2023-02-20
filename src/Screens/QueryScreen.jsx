import React, {useContext} from 'react';
import {Text, ScrollView, View} from 'react-native';
import AppContainer from '../Components/AppContainer';
import Button from '../Components/Button';
import QueryBox from '../Components/QueryBox';
import QueryDetails from '../Components/QueryDetails';
import TabHeader from '../Components/TabHeader';
import {AuthContext} from '../Context/auth-context';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Add from '../Utils/Icons/Add';
import Loader from '../Utils/Loader';

const QueryScreen = ({navigation}) => {
  const {isAuthenticated} = useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  

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
            <QueryBox status={'Open'} onPress={() => openQuery()} />
            <QueryBox status={'Closed'} onPress={() => openQuery()} />
            <QueryBox status={'Open'} onPress={() => openQuery()} />
          </AppContainer>
        </ScrollView>
      ) : (
        <Text>Please Login</Text>
      )}
    </>
  );
};

export default QueryScreen;
