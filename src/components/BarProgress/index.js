import { View, Text } from 'react-native'
import React from 'react'
import Styles from '../../Styles/Styles'

const BarProgress = ({progress}) => {

    let colorBar;
    if (progress <= 2.5){
         colorBar = "#FF5757"
    }
    if(progress > 2.5  && progress < 3.5){
        colorBar = "#FFDE59"
    }
    if(progress >= 3.5){
        colorBar = "#00BF63"
    }

  return (
    <View style={{backgroundColor: Styles.Colors.ColorOffWhite, borderRadius: 50}}>
      <View style={{backgroundColor: colorBar, width: `${progress * 20}%`, borderRadius:50 }}>
        <Text></Text>
      </View>
    </View>
  )
}

export default BarProgress