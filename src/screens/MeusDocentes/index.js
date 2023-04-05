import React from 'react';
import { Text, View } from 'react-native';
import Data from '../../Data';
import CardsSmall from '../../components/CardsSmall';
import { StyleSheet, ScrollView } from 'react-native';
import Styles from '../../Styles/Styles';
import { Dim } from '../../Utils/Dimensions';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useContext } from 'react';


const MeusDocentes = () => {
    const { userDocentes } = useContext(AuthContext)
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }



    const profiles = userDocentes.map(docente => {

        return (
            <CardsSmall key={docente.id_docente}
                nomeDocente={docente.nome}
                imgUrl={"https://cdn-icons-png.flaticon.com/512/4556/4556329.png"}
                sobrenomeDocente={docente.sobrenome}
            />
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
        justifyContent:"center",
        marginTop: "5%",
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    }

})

export default MeusDocentes;