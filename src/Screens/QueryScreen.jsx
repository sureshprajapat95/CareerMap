import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import AppContainer from '../Components/AppContainer';
import AppHeader from '../Components/AppHeader';
import Button from '../Components/Button';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Add from '../Utils/Icons/Add';
import Hamburger from '../Utils/Icons/Hamburger';
import Query from '../Utils/Icons/Query';

const QueryScreen = ({navigation}) => {
  return (
    <ScrollView>
      <AppHeader
        middleText={'Query'}
        left={{
          show: true,
          Icon: Hamburger,
          click: () => navigation.openDrawer(),
        }}
        right={{
          show: false,
        }}
      />
      <AppContainer>
        <View style={{alignItems: 'flex-end'}}>
          <Button
            buttonText={'Add'}
            buttonStyle={{
              width: Device.width / 3,
              backgroundColor: Colors.backgroundColor,
            }}
            textStyle={{color: Colors.primary, fontFamily: Fonts.SemiBold,paddingLeft: 10}}
            icon={<Add fill={Colors.primary} />}
            onPress={()=> navigation.navigate('addquery')}
          />
        </View>
        <View style={{marginTop: 25}}>
          <Neomorph
            inner={false}
            style={{
              shadowRadius: 5,
              borderRadius: 15,
              backgroundColor: Colors.backgroundColor,
              width: Device.width - 50,
              height: 160,
              position: 'relative',
              padding: 15,
              paddingBottom: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>Query</Text>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>04 Nov 2022</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20}}>
              <View>
                <Query width="45px" height="45px" fill={Colors.primary} />
              </View>
              <View style={{paddingLeft: 20, flex: 1}}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, flexWrap: 'wrap',fontFamily: Fonts.Medium,overflow: 'hidden'}} numberOfLines={2}>
                      You miss fdddddd dddddddd You miss fdd iss fdd  fdddddd dddddddd You miss fdd  fdddddd dddddddd You miss
                    </Text>
                  </View>
                  <Text style={{fontSize: 18, fontFamily: Fonts.Regular}}>
                    <Text style={{fontFamily: Fonts.Bold}}>Status: </Text>Open
                  </Text>
                </View>
              </View>
            </View>
          </Neomorph>
        </View>
        <View style={{marginTop: 25}}>
          <Neomorph
            inner={false}
            style={{
              shadowRadius: 5,
              borderRadius: 15,
              backgroundColor: Colors.backgroundColor,
              width: Device.width - 50,
              height: 160,
              position: 'relative',
              padding: 15,
              paddingBottom: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>Query</Text>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>04 Nov 2022</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20}}>
              <View>
                <Query width="45px" height="45px" fill={Colors.primary} />
              </View>
              <View style={{paddingLeft: 20, flex: 1}}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, flexWrap: 'wrap',fontFamily: Fonts.Medium,overflow: 'hidden'}} numberOfLines={2}>
                      You miss fdddddd dddddddd You miss fdd iss fdd  fdddddd dddddddd You miss fdd  fdddddd dddddddd You miss
                    </Text>
                  </View>
                  <Text style={{fontSize: 18, fontFamily: Fonts.Regular}}>
                    <Text style={{fontFamily: Fonts.Bold}}>Status: </Text>Open
                  </Text>
                </View>
              </View>
            </View>
          </Neomorph>
        </View>
        <View style={{marginTop: 25}}>
          <Neomorph
            inner={false}
            style={{
              shadowRadius: 5,
              borderRadius: 15,
              backgroundColor: Colors.backgroundColor,
              width: Device.width - 50,
              height: 160,
              position: 'relative',
              padding: 15,
              paddingBottom: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>Query</Text>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>04 Nov 2022</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20}}>
              <View>
                <Query width="45px" height="45px" fill={Colors.primary} />
              </View>
              <View style={{paddingLeft: 20, flex: 1}}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, flexWrap: 'wrap',fontFamily: Fonts.Medium,overflow: 'hidden'}} numberOfLines={2}>
                      You miss fdddddd dddddddd You miss fdd iss fdd  fdddddd dddddddd You miss fdd  fdddddd dddddddd You miss
                    </Text>
                  </View>
                  <Text style={{fontSize: 18, fontFamily: Fonts.Regular}}>
                    <Text style={{fontFamily: Fonts.Bold}}>Status: </Text>Open
                  </Text>
                </View>
              </View>
            </View>
          </Neomorph>
        </View>
        <View style={{marginTop: 25}}>
          <Neomorph
            inner={false}
            style={{
              shadowRadius: 5,
              borderRadius: 15,
              backgroundColor: Colors.backgroundColor,
              width: Device.width - 50,
              height: 160,
              position: 'relative',
              padding: 15,
              paddingBottom: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>Query</Text>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>04 Nov 2022</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20}}>
              <View>
                <Query width="45px" height="45px" fill={Colors.primary} />
              </View>
              <View style={{paddingLeft: 20, flex: 1}}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, flexWrap: 'wrap',fontFamily: Fonts.Medium,overflow: 'hidden'}} numberOfLines={2}>
                      You miss fdddddd dddddddd You miss fdd iss fdd  fdddddd dddddddd You miss fdd  fdddddd dddddddd You miss
                    </Text>
                  </View>
                  <Text style={{fontSize: 18, fontFamily: Fonts.Regular}}>
                    <Text style={{fontFamily: Fonts.Bold}}>Status: </Text>Open
                  </Text>
                </View>
              </View>
            </View>
          </Neomorph>
        </View>
        <View style={{marginTop: 25}}>
          <Neomorph
            inner={false}
            style={{
              shadowRadius: 5,
              borderRadius: 15,
              backgroundColor: Colors.backgroundColor,
              width: Device.width - 50,
              height: 160,
              position: 'relative',
              padding: 15,
              paddingBottom: 50,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>Query</Text>
              <Text style={{fontFamily: Fonts.SemiBold,fontSize: 17}}>04 Nov 2022</Text>
            </View>
            <View style={{flexDirection: 'row',paddingTop: 20}}>
              <View>
                <Query width="45px" height="45px" fill={Colors.primary} />
              </View>
              <View style={{paddingLeft: 20, flex: 1}}>
                <View style={{flex: 1}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{flex: 1, flexWrap: 'wrap',fontFamily: Fonts.Medium,overflow: 'hidden'}} numberOfLines={2}>
                      You miss fdddddd dddddddd You miss fdd iss fdd  fdddddd dddddddd You miss fdd  fdddddd dddddddd You miss
                    </Text>
                  </View>
                  <Text style={{fontSize: 18, fontFamily: Fonts.Regular}}>
                    <Text style={{fontFamily: Fonts.Bold}}>Status: </Text>Open
                  </Text>
                </View>
              </View>
            </View>
          </Neomorph>
        </View>
      </AppContainer>
    </ScrollView>
  );
};

export default QueryScreen;
