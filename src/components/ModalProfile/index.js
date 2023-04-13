import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Card } from 'react-native-paper';
import Styles from '../../Styles/Styles';


const ModalProfile = ({ visible, closeModal, nomeDocente, sobrenomeDocente, imgUrl },) => {
    return (

        <Modal isVisible={visible}>
            <View>
                <ScrollView>
                    <View style={styles.container} >
                        <Card>
                            <View style={styles.header}>
                                <Card.Cover source={{ uri: imgUrl }} style={{ width: 70, height: 70 }} />
                                <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 25, marginLeft: 10 }}>
                                    {nomeDocente + " " + sobrenomeDocente}
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
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.btnFechar} onPress={closeModal}>
                        <Button onPress={closeModal} title="Fechar" color={Styles.Colors.colorOrange} />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

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
    },
    btnFechar: {
        marginTop: 10,
        width: 60,
        borderRadius: 5,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }




})


export default ModalProfile;