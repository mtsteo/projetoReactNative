import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Cards from '../Cards';
import Data from '../../Data'
import { Dim } from '../../Utils/Dimensions';
import { useFonts, Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';


function Slider() {


    const width = Dim.WIDTH
    const profiles = Data.map(profile => {
        return (
            <Cards
                imgUrl={profile.photoUrl}
                nomeDocente={profile.nomeDocente}
                sobrenomeDocente={profile.sobrenomeDocente}
                didatica={profile.didatica}
                metodologia={profile.metodologia}
                comprometimento={profile.comprometimento}
            />

        )
    })

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.melhoresAval}>
                <Text style={styles.melhoresAvalTitle}>Melhores Avaliados</Text>
                <TouchableOpacity>
                    <Text style={{fontFamily:"Roboto_700Bold"}}>Ver todos</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                overscrollEnabled
                loop
                mode='parallax'
                width={width}
                height={width + 60}
                autoPlay={true}
                data={profiles}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                    >
                        {item}
                    </View>
                )
                }
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    melhoresAval: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginStart: 20,
        marginEnd: 20,
        marginTop: 50
    },
    melhoresAvalTitle: {
        fontSize: 25,
        fontFamily: "Roboto_700Bold",
    }


})

export default Slider;