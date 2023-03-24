import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Styles from '../../Styles/Styles'
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ionicons } from '@expo/vector-icons';
import RankigCard from '../../components/RankigCard';
import Data from '../../Data';
import { Card, Provider } from 'react-native-paper';





export default function Ranking() {
  const posit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const profiles = Data.map(profile => {
    return (
      <RankigCard
        nomeDocente={profile.nomeDocente}
        sobrenomeDocente={profile.sobrenomeDocente}
        key={profile.id}
        imgPhoto={profile.photoUrl} />
    )
  })

  return (
    <View style={styles.container}>
      <View style={styles.rankingTitle}>
        <Text style={styles.rankingText}> TOP 10 </Text>
        <Ionicons name="trophy" size={25} color={Styles.Colors.coloWhite} />
      </View>
      <ScrollView style={{ marginTop: 10, borderRadius: 44 }}>
        <View style={{ flexDirection: "row", marginTop: 10, marginLeft:10 }}>
          <View>
            {posit.map(position => {
              return (
                <Card key={position} onPress={() => { }} mode={'elevated'} style={{ width: 50, height: 50, margin: 5, borderRadius: 50, flex:1, justifyContent:"center", alignItems:"center", backgroundColor:Styles.Colors.colorOrange }}  >
                  <View style={{ display: 'flex', justifyContent: "center", }}>
                    <Text style={{fontFamily:"Roboto_700Bold", fontSize:25, color:Styles.Colors.ColorOffWhite}}>{position + "°"}</Text>
                  </View>
                </Card>
              )
            })}
          </View>
          <View style={{ width: "80%" }}>
            {profiles}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Styles.ColorOffWhite
  },
  rankingTitle: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Styles.Colors.colorOrange,
    marginRight: 80,
    marginLeft: 80,
    borderRadius: 44,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  rankingText: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    color: Styles.Colors.coloWhite
  },

})

