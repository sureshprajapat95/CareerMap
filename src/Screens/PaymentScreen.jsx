import {ScrollView, View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useContext} from 'react';
import AppContainer from '../Components/AppContainer';
import Input from '../Components/Input';
import {Device} from '../Utils/DeviceDimensions';
import Button from '../Components/Button';
import ChevronRight from '../Utils/Icons/Chevrons';
import Separator from '../Components/Separator';
import TabHeader from '../Components/TabHeader';
import {AuthContext} from '../Context/auth-context';
import NoLogin from '../Components/NoLogin';
import {Colors} from '../Utils/Colors';
import {Fonts} from '../Utils/Fonts';
import {useFocusEffect} from '@react-navigation/native';
import Loader from '../Utils/Loader';
import {Call} from '../Service/Api';
import {Neomorph} from 'react-native-neomorph-shadows';
import Tick from '../Utils/Icons/Tick';

const PaymentScreen = ({navigation}) => {
  const {isAuthenticated} = useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [plans, setPlans] = React.useState([]);
  const [states, setStates] = React.useState({coupon: '', student_id: ''});
  const [selectedPlan, setSelectedPlan] = React.useState({
    coupon: '',
    student_id: '',
  });
  const [paymentType, setPaymentType] = React.useState('');

  useFocusEffect(
    React.useCallback(() => {
      getPlans();
    }, []),
  );

  const getPlans = async () => {
    setIsLoading(true);
    try {
      const response = await Call('getPlans', {});
      setIsLoading(false);
      console.log(response.data.data);
      setPlans(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.log(error.response.status);
    }
  };

  const applyCoupon = async () => {
    console.log(states);
    // return
    try {
      setIsLoading(true);
      let payload = {
        student_id: '62ded2c9176c19c8b589d568',
        coupon: states.coupon,
        plan: '',
        payment_mode: '',
      };
      const response = await Call('purchasePlan', payload);
      setIsLoading(false);
      console.log(response.data);
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data);
    }
  };

  const applyTrial = async () => {
    try {
      let payload = {
        student_id: '62ded2c9176c19c8b589d568',
        coupon: '',
        plan: 'TRIAL',
        payment_mode: '',
      };
      const response = await Call('purchasePlan', payload);
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <Loader visible={isLoading} />
      <TabHeader
        leftClick={() => navigation.openDrawer()}
        navigation={navigation}
        title={'Plans'}
        color={isAuthenticated ? Colors.backgroundColor : Colors.light}
      />
      {isAuthenticated ? (
        <ScrollView style={{flex: 1}}>
          <AppContainer>
            <View style={{paddingTop: 20}}>
              <Text style={{fontFamily: Fonts.Medium, fontSize: 18}}>
                Already have a coupon code?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 25,
                }}>
                <Input
                  placeholder="Coupon code"
                  style={{width: (Device.width * 2) / 3}}
                  value={states.coupon}
                  onChangeText={coupon =>
                    setStates(prev => ({...prev, coupon}))
                  }
                />
                <Button
                  icon={<ChevronRight fill={Colors.light} />}
                  buttonText=""
                  buttonStyle={{width: 50, shadowRadius: 3}}
                  onPress={applyCoupon}
                />
              </View>
            </View>
            <Separator text={'OR'} />
            <View>
              <Text style={{fontFamily: Fonts.Medium, fontSize: 16}}>
                You have trial available to use all features for 30 days. Tap
                button below to start your trial.
              </Text>
              <Button
                icon=""
                buttonText="Start Trial"
                buttonStyle={{width: 150, shadowRadius: 3, marginTop: 20}}
                onPress={applyTrial}
              />
            </View>
            <Separator text={'OR'} />
            <View>
              <Text style={{fontFamily: Fonts.Medium, fontSize: 16}}>
                You can also purchase a paid plan also. Pick any plan from below
                and select payment mode.{' '}
              </Text>
              <View style={{paddingTop: 50}}>
                {plans.length
                  ? plans.map((item, index) => {
                      return item.name != 'TRIAL' ? (
                        <Pressable
                          onPress={() => setSelectedPlan(item._id)}
                          key={index}>
                          <Neomorph
                            inner={item._id === selectedPlan}
                            style={{
                              shadowRadius: 5,
                              borderRadius: 15,
                              backgroundColor: Colors.backgroundColor,
                              width: Device.width - 50,
                              height: Device.width / 2.5,
                              /* alignItems: 'center', */
                              flexDirection: 'row',
                              paddingHorizontal: 20,
                              paddingTop: 10,
                              marginBottom: 20,
                            }}>
                            <View style={styles.price}>
                              <Text style={styles.priceText}>
                                {'\u20B9' + item.amount}
                              </Text>
                            </View>
                            {item._id === selectedPlan ? (
                              <View
                                style={{
                                  position: 'absolute',
                                  right: 15,
                                  top: 15,
                                }}>
                                <Tick
                                  width={'40px'}
                                  height={'40px'}
                                  stroke={Colors.primary}
                                />
                              </View>
                            ) : (
                              ''
                            )}
                            <View>
                              <Text style={styles.name}>{item.name}</Text>
                              <Text style={styles.title}>
                                {item.duration_days}
                              </Text>
                              <Text style={styles.description}>
                                {item.description}
                              </Text>
                            </View>
                          </Neomorph>
                        </Pressable>
                      ) : (
                        ''
                      );
                    })
                  : ''}
              </View>
              <View style={{marginVertical: 25}}>
                <Text style={{fontSize: 20, fontFamily: Fonts.Bold}}>Payment Type</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 25}}>
                  <Pressable onPress={() => setPaymentType('cash')} >
                    <Neomorph
                      inner={paymentType === 'cash'}
                      style={{
                        shadowRadius: 5,
                        borderRadius: 15,
                        backgroundColor: Colors.backgroundColor,
                        width: Device.width / 3,
                        height: 50,
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        justifyContent: 'space-between'
                      }}>
                      <Text style={{fontSize: 20, fontFamily: Fonts.SemiBold,color: paymentType === 'cash' ? Colors.primary : Colors.dark}}>
                        Cash
                      </Text>
                      {paymentType === 'cash' ? <Tick width={'30px'} height={'30px'} stroke={Colors.primary} /> : ''}
                    </Neomorph>
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress={() => setPaymentType('online')}>
                    <Neomorph
                      inner={paymentType === 'online'}
                      style={{
                        shadowRadius: 5,
                        borderRadius: 15,
                        backgroundColor: Colors.backgroundColor,
                        width: Device.width / 3,
                        height: 50,
                        alignItems: 'center',
                        flexDirection: 'row',
                        paddingHorizontal: 15,
                        justifyContent: 'space-between'
                      }}>
                      <Text style={{fontSize: 20, fontFamily: Fonts.SemiBold,color: paymentType === 'online' ? Colors.primary : Colors.dark}}>
                        Online
                      </Text>
                      {paymentType === 'online' ? <Tick width={'30px'} height={'30px'} stroke={Colors.primary} /> : ''}
                    </Neomorph>
                  </Pressable>
                </View>
              </View>
              <Button
                icon=""
                buttonText="Buy Now"
                buttonStyle={{width: 150, shadowRadius: 3, marginTop: 20}}
                onPress={null}
              />
            </View>
          </AppContainer>
        </ScrollView>
      ) : (
        <NoLogin navigation={navigation} />
      )}
    </>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  name: {
    fontSize: 28,
    marginBottom: 10,
    color: Colors.primary,
    fontFamily: Fonts.Bold,
    /* textAlign: 'center',
    textAlign: 'right',
    position: 'absolute',
    top: -15,
    right: -30, */
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: Colors.dark,
    fontFamily: Fonts.Bold,
  },
  description: {
    fontWeight: '300',
    fontSize: 15,
    /* paddingHorizontal: 64, */
    color: Colors.dark,
    fontFamily: Fonts.Medium,
    /* textAlign: 'center', */
  },
  price: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  priceText: {
    fontSize: 16,
    fontFamily: Fonts.Medium,
    color: Colors.light,
    paddingBottom: 5,
  },
});
