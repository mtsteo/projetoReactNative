import { Card, Modal } from 'react-native-paper';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Styles from '../../Styles/Styles';
import { useState } from 'react';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import ModalAval from '../ModalAval';


export default function CardsSmall(props) {
    const [isOpenProfile, setIsOpenProfile] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={{ margin: '1%' }} >
            <Modal isVisible={isOpenModal}>
                <View style={{ flex: 1 }}>
                    <Text>Avaliação</Text>
                    <Button onPress={() => setIsOpenModal(false)} title="Hide modal" />
                </View>
            </Modal>
            <Card onPress={() => { }} style={{ width: 160, height: 300 }} >
                <Card.Cover source={{ uri: props.imgUrl }} style={{ height: 150 }} />
                <Card.Content>
                    <View style={styles.container}>
                        <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 15 }}>{props.nomeDocente + " " + props.sobrenomeDocente}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={() =>  setIsOpenProfile(true) } style={styles.btnVerPerfil}>
                            <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 20, color: "#fff" }}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsOpenModal(true)} style={styles.btnAvaliar}>
                            <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 20, color: "#fff" }}>Avaliar</Text>
                        </TouchableOpacity>
                    </View>
                </Card.Content>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        marginTop: 10
    },
    nomeDocente: {
        fontSize: 30,
        fontWeight: 700,
    },

    btnFechar: {
        marginTop: 10,
        width: 60,
        backgroundColor: Styles.Colors.colorOrange,
        borderRadius: 5,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btnAvaliar: {
        backgroundColor: Styles.Colors.colorGreen,
        borderRadius: 14,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    btnVerPerfil: {
        backgroundColor: Styles.Colors.colorOrange,
        borderRadius: 14,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },




})
