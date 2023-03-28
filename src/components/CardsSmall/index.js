import { Card } from 'react-native-paper';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Styles from '../../Styles/Styles';
import Modal from 'react-native-modal';
import { useState } from 'react';
import ProfileDocente from '../ProfileDocente';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function CardsSmall(props) {
    const [isOpen, setIsOpen] = useState(false)

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={{margin:'1%'}} >
            <Modal
                isVisible={isOpen}
                style={{ flex: 1, }}>
                <View>
                    <ProfileDocente
                        imgUrl={props.imgUrl}
                        nomeDocente={props.nomeDocente}
                        sobrenomeDocente={props.sobrenomeDocente}
                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.btnFechar} onPress={() => setIsOpen(!isOpen)}>
                        <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 15, color: "#fff" }}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Card onPress={() => {}} style={{ width: 160, height: 300 }} >
                <Card.Cover source={{ uri: props.imgUrl }} style={{ height: 150 }} />
                <Card.Content>
                    <View style={styles.container}>
                        <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 15 }}>{props.nomeDocente + " " + props.sobrenomeDocente}</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={()=>{setIsOpen(true)}} style={styles.btnVerPerfil}>
                            <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 20, color: "#fff" }}>Perfil</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnAvaliar}>
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
