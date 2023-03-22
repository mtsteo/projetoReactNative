import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const RegisterPage = () => {
  return (
    <View style={style.container}>
      <Text>RegisterPage</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
  }
})

export default RegisterPage