import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {Device} from '../Utils/DeviceDimensions';
import {Fonts} from '../Utils/Fonts';
import {useFocusEffect} from '@react-navigation/native';

const QueryDetails = ({visible, onClose}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    console.log('hello');
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsLoading(true);
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log('hello');
      /* const unsubscribe = API.subscribe(userId, user => setUser(user)); */

      return () => setIsLoading(true);
    }, []),
  );

  return (
    <Modal
      transparent={visible}
      animationType={'none'}
      visible={visible}
      style={{zIndex: 1100}}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <TouchableOpacity
            onPress={onClose}
            style={{position: 'absolute', right: 20, top: 10}}>
            <Text style={{fontFamily: Fonts.Bold}}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    position: 'relative',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    top: 50,
    bottom: 50,
    left: 20,
    right: 20,
  },
  animation: {
    width: 100,
    height: 100,
  },
});

export default QueryDetails;
