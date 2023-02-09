import React from 'react'
import { View } from 'react-native'

const AppContainer = ({children}) => {
    return <View style={{flex: 1,paddingHorizontal: 25,paddingBottom: 25,backgroundColor: '#eee'}}>{children}</View>
}

export default AppContainer