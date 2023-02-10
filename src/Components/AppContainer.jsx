import React from 'react'
import { View } from 'react-native'
import { Colors } from '../Utils/Colors'

const AppContainer = ({children}) => {
    return <View style={{flex: 1,paddingHorizontal: 25,paddingBottom: 150,backgroundColor: Colors.backgroundColor}}>{children}</View>
}

export default AppContainer