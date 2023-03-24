import { Card } from 'react-native-paper';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Styles from '../../Styles/Styles';
import BarProgress from '../BarProgress'
import { AirbnbRating } from 'react-native-ratings';
import Modal from 'react-native-modal';
import { useState } from 'react';
import ProfileDocente from '../ProfileDocente';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';



export default function Cards(props) {
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
        <View style={{ marginEnd: 25, marginStart: 25 }}>
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
                    <TouchableOpacity style={styles.btnFechar } onPress={()=> setIsOpen(!isOpen)}>
                        <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 15, color: "#fff" }}>Fechar</Text>
                    </TouchableOpacity>
                </View>

            </Modal>
            <Card onPress={() => setIsOpen(true)} >
                <Card.Cover source={{ uri: props.imgUrl }} />
                <Card.Content>
                    <View style={styles.container}>
                        <Text style={styles.nomeDocente}>Prof° {props.nomeDocente + " " + props.sobrenomeDocente}</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.criterio}>Didática</Text>
                            <BarProgress progress={props.didatica} />
                        </View>
                        <View>
                            <Text style={styles.criterio}>Metodologia</Text>
                            <BarProgress progress={props.metodologia} />
                        </View>
                        <View>
                            <Text style={styles.criterio}>comprometimento</Text>
                            <BarProgress progress={props.comprometimento} />
                        </View>
                    </View>
                </Card.Content>
                <View style={styles.rating}>
                    <AirbnbRating
                        reviews={['Péssimo', 'Ruim', 'Bom', 'Ótimo', 'Excelente']}
                        size={30}
                        isDisabled
                        defaultRating={3}
                        reviewSize={25}
                        showRating

                    />
                </View>

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
        fontWeight: 700
    },
    criterio: {
        fontSize: 25,
        marginTop: 10
    },
    rating: {
        marginBottom: 10
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
    }




})
