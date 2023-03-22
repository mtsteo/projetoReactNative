import { View, Text, Button, TextInput, Dimensions,Input } from 'react-native'
import React, { useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import Styles from '../../Styles/Styles'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { AuthContext } from '../../contexts/AuthContext'
import LottieView from 'lottie-react-native'

const width = Dimensions.get("window").width - 60

export default function LoginPage({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [erroMsg, setErroMsg] = useState('')

  const {login} = useContext(AuthContext)

  async function HandleLogin() {
    if (username && password) {
      const IsLogged = await auth.LogIn(username, password)
      if (IsLogged) {
        navigation.navigate('AppStack')
      }
      else {
        setErroMsg('Dados incorretos!')
      }
    }
  }


  return (
    <View style={style.container}>
      <View style={{ marginTop: '50%' }}>
        <View>
          <Text style={style.erroMsg}>{erroMsg}</Text>
          <TextInput textAlign={'center'} placeholder='Digite seu usuário' style={style.inputsArea} onChange={prevS => setUsername(prevS)}></TextInput>
          <TextInput textAlign={'center'} placeholder='Digite seu usuário' style={style.inputsArea}  secureTextEntry onChange={prevS => setPassword(prevS)}></TextInput>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Styles.Colors.colorOrange,
          padding: 10,
          width: '30%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={()=> login()}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Entrar
        </Text>
        <Feather name='log-in' size={30} color={'white'} />
      </TouchableOpacity>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Styles.Colors.colorGreen,
  },
  inputsArea: {
    margin: 15,
    height: 50,
    width: width,
    backgroundColor: Styles.Colors.ColorOffWhite,
    borderRadius: 10,
    fontSize: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  erroMsg: {
    fontSize: 15,
    fontWeight: 700,
    textAlign: 'center',
    color: "red"
  }
})