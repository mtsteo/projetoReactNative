import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Styles from '../../Styles/Styles';


const RegisterPage = () => {
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
        <SelectDropdown
        data={['SISTEMAS DE INFORMAÇÃO','LICENCIATURA EM COMPUTAÇÃO']}
        buttonTextStyle={style.SelectDropdown.textButton}
        buttonStyle={style.SelectDropdown}
        rowTextStyle={style.SelectDropdown.textOptions}
        dropdownStyle={{borderRadius:14}}
        dropdownIconPosition='right'
        defaultButtonText={'SELECIONE SEU CURSO'}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        
        />
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <TextInput style={style.inputs1}></TextInput>
        <TextInput style={style.inputs1}></TextInput>
      </View>
      <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <TextInput style={style.inputs1}></TextInput>
        <TextInput style={style.inputs1}></TextInput>
        
      </View>
        <TextInput style={style.inputs2}></TextInput>
        
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  SelectDropdown:{
    borderColor:Styles.Colors.colorGreen,
    borderWidth:4,
    borderRadius:14,
    backgroundColor:Styles.Colors.colorGreen,
    width:"90%",
    textButton:{
        color:Styles.Colors.coloWhite,
        fontFamily:"Roboto_400Regular"
    },
    textOptions:{
      fontFamily:"Roboto_400Regular"
    }
  },

  inputs1: {
    borderColor:Styles.Colors.colorGreen,
    borderWidth:4,
    padding: 10,
    margin:"5%",
    borderRadius:14,
    width:"40%"
  },
  inputs2:{
    borderColor:Styles.Colors.colorGreen,
    borderWidth:4,
    padding: 10,
    margin:"5%",
    borderRadius:14,
    width:"90%"
  }
})


export default RegisterPage