import React from 'react'
import { StatusBar, StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import Styles from '../../Styles/Styles'
import { useFonts, Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64
export default function Header({ navigation}) {
    const {userData} = useContext(AuthContext)


    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 25, fontFamily: 'Roboto_700Bold', color: "white" }}> Olá, {userData.nome_discente}! </Text>
                <TouchableOpacity style={styles.buttonUser} onPress={() => navigation.openDrawer()}>
                    <Image source={!userData.fotoRef ? {uri:`https://storage.googleapis.com/sistemaaval/0.png`}:
                    {uri:`https://storage.googleapis.com/sistemaaval/${userData.fotoRef}.jpg`}
                } style={{ height: 44, width: 44, borderRadius: 40, }} />
                </TouchableOpacity>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Styles.Colors.colorGreen,
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingEnd: 16,
        paddingStart: 15,
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    username: {
        fontSize: 25,
        fontWeight: 700,
        color: Styles.Colors.coloWhite,

    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2
    },
})
