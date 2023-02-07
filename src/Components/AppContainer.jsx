import React from 'react'
import { View } from 'react-native'

const AppContainer = ({children}) => {
    return <View style={{flex: 1,paddingHorizontal: 25,backgroundColor: '#fff'}}>{children}</View>
}

export default AppContainer