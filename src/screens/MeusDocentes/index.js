import React from 'react';
import { Text, View } from 'react-native';
import Data from '../../Data';
import CardsSmall from '../../components/CardsSmall';
import { StyleSheet, ScrollView } from 'react-native';
import Styles from '../../Styles/Styles';
import { Dim } from '../../Utils/Dimensions';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';


const MeusDocentes = () => {
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    const profiles = Data.map(docente => {
        return (
            <View key={docente.id}>
                <CardsSmall key={docente.id}
                    nomeDocente={docente.nomeDocente}
                    imgUrl={docente.photoUrl}
                    sobrenomeDocente={docente.sobrenomeDocente}
                />
            </View>
        )
    })

    return (
        <View>
            <ScrollView>
                <View style={style.profiles}>
                    {profiles}
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Styles.Colors.colorGreen,
        height: Dim.STATUSBAR + 44
    },
    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 25,
        color: "#fff"
    },
    profiles: {
        marginTop:10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    }

})

export default MeusDocentes;