import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Styles from '../../Styles/Styles'


export default function Ranking() {

  return (
    <View style={styles.container}>
      <Text> Ranking </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Styles.ColorOffWhite
  }

})

