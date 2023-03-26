import React from 'react';
import { View } from 'react-native';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import Styles from '../../Styles/Styles';

// import { Container } from './styles';

const RankigCard = (props) => {
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }


    return (

        <Card onPress={() => { }} mode={'elevated'} style={style.container} >
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width:"100%" }}>
                <Image source={{ uri: props.imgPhoto }} style={{ width: 45, height: 45, marginLeft: 5 }} />
                    <Text style={{ marginLeft: 20, fontFamily: "Roboto_700Bold", fontSize: 20, }}>{props.nomeDocente + " " + props.sobrenomeDocente}</Text>
            </TouchableOpacity>
        </Card>

    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        height: 50,
        margin: 5,
        borderBottomWidth:4,
        borderBottomColor:Styles.Colors.colorGreen

    }
})

export default RankigCard;