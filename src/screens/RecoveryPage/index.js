import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Styles from '../../Styles/Styles';


const RecoveryPage = () => {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={style.container}>
      <View>
        <Text style={style.aviso}>
          Um email para recuperação de senha será enviado para você, caso não encontre na sua caixa de entrada, verique a caixa de SPAM!
        </Text>
      </View>

      <TextInput style={style.inputsEmail} placeholder='Digite seu e-mail'></TextInput>
      <TouchableOpacity style={style.btnEnviar}>
        <Text style={style.btnEnviar.btnText}>Enviar</Text>
      </TouchableOpacity>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputsEmail: {
    borderColor: Styles.Colors.colorGreen,
    borderWidth: 4,
    padding: 10,
    margin: "5%",
    borderRadius: 14,
    width: "90%",
  },

  aviso: {
    textAlign: "left",
    fontFamily: "Roboto_400Regular",
    fontSize: 20,
    color: Styles.Colors.colorGreen,
  },

  btnEnviar: {
    width: "30%",
    alignItems:"center",
    backgroundColor: Styles.Colors.colorGreen,
    height: "5%",
    borderRadius: 14,
    btnText: {
      color: Styles.Colors.coloWhite,
      fontFamily: "Roboto_400Regular",
      fontSize: 20
    }
  }
})


export default RecoveryPage