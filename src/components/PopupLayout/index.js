import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';


// import { Container } from './styles';

const PopupLayout = (props) => {

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_400Regular
});

if (!fontsLoaded) {
    return null;
}

  return (
    <Card>
          <Card.Content style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={styles.Msg} >
               {props.msg}
            </Text>
          </Card.Content>
        </Card>
  );
}

const styles = StyleSheet.create({
  Msg:{
    fontFamily:"Roboto_400Regular",
    fontSize:20
  }

})

export default PopupLayout;