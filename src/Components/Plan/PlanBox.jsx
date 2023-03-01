import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import {Neomorph} from 'react-native-neomorph-shadows';
import {Colors} from '../../Utils/Colors';
import {Device} from '../../Utils/DeviceDimensions';
import { Fonts } from '../../Utils/Fonts';

const PlanBox = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width, padding: 30}]}>
      <Neomorph
        inner={false}
        style={{
          shadowRadius: 5,
          borderRadius: 15,
          backgroundColor: Colors.backgroundColor,
          width: Device.width - 100,
          height: 350,
          justifyContent: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.price}>
          <Text style={styles.priceText}>{'\u20B9'}50</Text>
        </View>
        <View style={{padding: 10}}>
          <Text style={styles.title}>{item.title}</Text>
          <Pressable onPress={() => console.log('hello')}>
            <Text style={styles.description}>{item.description}</Text>
          </Pressable>
        </View>
      </Neomorph>
    </View>
  );
};

export default PlanBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    color: Colors.primary,
    fontFamily: Fonts.Bold
    /* textAlign: 'center', */
  },
  description: {
    fontWeight: '300',
    fontSize: 18,
    /* paddingHorizontal: 64, */
    color: Colors.dark,
    fontFamily: Fonts.Medium,
    /* textAlign: 'center', */
  },
  price: {
    position: 'absolute',
    top: 10,
    right: 20
  },
  priceText: {
    fontSize: 40,
    fontFamily: Fonts.Bold,
    color: Colors.primary
  },
});
