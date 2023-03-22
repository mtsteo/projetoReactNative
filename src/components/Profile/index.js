import { Card, Button } from 'react-native-paper';
import { Text, View, StyleSheet } from 'react-native';
import Styles from '../../Styles/Styles';
import BarProgress from '../BarProgress'
import { Rating, AirbnbRating } from 'react-native-ratings';


export default function Profile(props) {



    return (
        <View style={{ marginEnd: 25, marginStart: 25 }}>
            <Card>
                <Card.Cover source={{ uri: props.imgUrl }} />
                <Card.Content>
                    <View style={styles.container}>
                        <Text style={styles.nomeDocente}>{props.nomeDocente}</Text>
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
    rating:{
        marginBottom:10




    }



})
