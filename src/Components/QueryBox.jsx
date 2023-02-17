import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Query from '../Utils/Icons/Query';
import Badge from './Badge';

const QueryBox = ({status, onPress}) => {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Pressable
      style={{marginTop: 25}}
      onPress={onPress}
      onPressIn={() => setPressed(prev => !prev)}
      onPressOut={() => setPressed(prev => !prev)}>
      <Neomorph
        inner={pressed}
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
          <Text style={{fontFamily: Fonts.SemiBold, fontSize: 17}}>Query</Text>
          <Text style={{fontFamily: Fonts.SemiBold, fontSize: 17}}>
            04 Nov 2022
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <View>
            <Query width="45px" height="45px" fill={Colors.primary} />
          </View>
          <View style={{paddingLeft: 20, flex: 1}}>
            <View style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    fontFamily: Fonts.Medium,
                    overflow: 'hidden',
                  }}
                  numberOfLines={2}>
                  You miss fdddddd dddddddd You miss fdd iss fdd fdddddd
                  dddddddd You miss fdd fdddddd dddddddd You miss
                </Text>
              </View>
              <Badge
                title={status}
                badgeStyle={{
                  width: Device.width / 4,
                  backgroundColor:
                    status == 'Open' ? Colors.primary : Colors.lightdark,
                }}
              />
            </View>
          </View>
        </View>
      </Neomorph>
    </Pressable>
  );
};

export default QueryBox;
