import React from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import { Card } from 'react-native-paper';
import { AirbnbRating } from 'react-native-ratings';
import Styles from '../../Styles/Styles';


const ModalAval = ({ visible, closeModal, nomeDocente, sobrenomeDocente, imgUrl },) => {
    const [DitaticacolorReview, setDidaticaColorReview] = React.useState()
    const [MetodologiacolorReview, setMetodologiaColorReview] = React.useState()
    const [comprometimentocolorReview, setComprometimentoColorReview] = React.useState()
    

    const ReturnColor = (rating)=>{
        if (rating <= 2){
            return Styles.Colors.colorRed
        }if(rating > 2 && rating <= 3){
            return Styles.Colors.colorOrange
        }else{
            return Styles.Colors.colorGreen
        }
    }

 


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
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Text style={styles.header.title}>
                                            Avaliação de Docente
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.criterios}>
                                    <Card style={styles.criterios.cardProp}>
                                        <Card.Content>
                                            <View style={styles.criterios.cardProp.cardHeader}>
                                                <Text style={styles.criterios.criterioTitle}>
                                                    Didática
                                                </Text>
                                            </View>
                                            <View>
                                                <AirbnbRating
                                                    reviews={['Péssimo', 'Ruim', 'Bom', 'Ótimo', 'Excelente']}
                                                    size={30}
                                                    defaultRating={3}
                                                    reviewSize={25}
                                                    showRating
                                                    reviewColor={DitaticacolorReview}
                                                    onFinishRating={(e) =>{
                                                        const color = ReturnColor(e)
                                                        setDidaticaColorReview(color)
                                                    }}
                                                />
                                            </View>

                                        </Card.Content>
                                    </Card>
                                    <Card style={styles.criterios.cardProp}>
                                        <Card.Content>
                                            <View style={styles.criterios.cardProp.cardHeader}>
                                                <Text style={styles.criterios.criterioTitle}>
                                                    Metodologia
                                                </Text>
                                            </View>
                                            <View>
                                                <AirbnbRating
                                                    reviews={['Péssimo', 'Ruim', 'Bom', 'Ótimo', 'Excelente']}
                                                    size={30}
                                                    defaultRating={3}
                                                    reviewSize={25}
                                                    showRating
                                                    reviewColor={MetodologiacolorReview}
                                                    onFinishRating={(e) =>{
                                                        const color = ReturnColor(e)
                                                        setMetodologiaColorReview(color)
                                                    }}
                                                />
                                            </View>

                                        </Card.Content>
                                    </Card>
                                    <Card style={styles.criterios.cardProp}>
                                        <Card.Content>
                                            <View style={styles.criterios.cardProp.cardHeader}>
                                                <Text style={styles.criterios.criterioTitle}>
                                                    Metodologia
                                                </Text>
                                            </View>
                                            <View>
                                                <AirbnbRating
                                                    reviews={['Péssimo', 'Ruim', 'Bom', 'Ótimo', 'Excelente']}
                                                    size={30}
                                                    defaultRating={3}
                                                    reviewSize={25}
                                                    showRating
                                                    reviewColor={comprometimentocolorReview}
                                                    onFinishRating={(e) =>{
                                                        const color = ReturnColor(e)
                                                        setComprometimentoColorReview(color)
                                                    }}
                                                />
                                            </View>

                                        </Card.Content>
                                    </Card>
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
        borderBottomColor: '#ccc',
        title: {
            fontFamily: "Roboto_700Bold",
            fontSize: 20
        }

    },
    criterios: {
        flex: 1,
        criterioTitle: {
            fontFamily: "Roboto_700Bold",
            fontSize: 20,
           
        },
        cardProp: {
            margin: 5,
            cardHeader: {
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: '#ccc',
            }
        }

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


export default ModalAval;