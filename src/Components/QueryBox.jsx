import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Colors} from '../Utils/Colors';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import Counsellor from '../Utils/Icons/Counsellor';
import Query from '../Utils/Icons/Query';
import Badge from './Badge';
import moment from 'moment';
import Message from '../Utils/Icons/Message';

const QueryBox = ({data, status, onPress}) => {
  const [pressed, setPressed] = React.useState(false);
  let obj = {
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
  };

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
          <Text style={{fontFamily: Fonts.SemiBold, fontSize: 17}}>
            {data.type == 'query' ? 'Query' : 'Counsellor'}
          </Text>
          <Text style={{fontFamily: Fonts.SemiBold, fontSize: 12}}>
            {moment(data.createdAt).format('Do MMM YYYY')}
          </Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <View>
            {data.type == 'query' ? (
              <Message width="45px" height="45px" fill={Colors.primary} />
            ) : (
              <Counsellor width="45px" height="45px" fill={Colors.primary} />
            )}
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
                  {data.question}
                </Text>
              </View>
              <Badge
                title={data.status}
                badgeStyle={{
                  width: Device.width / 5,
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
