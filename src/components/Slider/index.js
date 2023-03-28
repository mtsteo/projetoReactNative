import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Cards from '../Cards';
import Data from '../../Data'
import { Dim } from '../../Utils/Dimensions';
import { useFonts, Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';


function Slider() {
    const width = Dim.WIDTH
    const height = Dim.HEIGHT
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
                    <Text style={{ fontFamily: "Roboto_700Bold" }}>Ver todos</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                
                style={{flex:1}}
                loop
                mode='parallax'
                width={width}
                height={height-500}
                autoPlay={true}
                data={profiles}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View>
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
        flex: 1,
        justifyContent: 'center',
    },
    melhoresAval: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginStart: "5%",
        marginEnd: "5%",
    },
    melhoresAvalTitle: {
        fontSize: 25,
        fontFamily: "Roboto_700Bold",
    }

})

export default Slider;