import AppLoading from 'expo-app-loading';
import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';



// import { Container } from './styles';

const ProfileDocente = (props) => {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ScrollView>
      <View style={styles.container} >
        <Card>
          <View style={styles.header}>
            <Card.Cover source={{ uri: props.imgUrl }} style={{ width: 70, height: 70 }} />
            <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 25, marginLeft: 10 }}>
              {props.nomeDocente + " " + props.sobrenomeDocente}
            </Text>
          </View>
          <Card.Content>
            <View style={{ marginTop: 10 }}>
              <Text style={styles.info}>
                Formação:
              </Text>
              <Text>
                Engenheiro da NASA, Faxineiro do GOOGLE e nas horas vagas Professor universitário.
              </Text>
            </View>

          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'

  },
  info: {
    fontFamily: "Roboto_400Regular",
    fontSize: 17,
    fontWeight: 700
  }




})

export default ProfileDocente;