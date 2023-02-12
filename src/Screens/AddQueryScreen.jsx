import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import AppHeader from '../Components/AppHeader';
import { ChevronLeft } from '../Utils/Icons/Chevrons';
import Hamburger from '../Utils/Icons/Hamburger';

const AddQueryScreen = ({navigation}) => {
  return (
    <ScrollView>
      <AppHeader
        middleText={'Add Query'}
        left={{
          show: true,
          Icon: ChevronLeft,
          click: () => navigation.goBack(),
        }}
        right={{
          show: false,
        }}
      />
    </ScrollView>
  );
};

export default AddQueryScreen;
