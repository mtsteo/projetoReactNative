import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Cards from '../Cards';
import Data from '../../Data'
import  Modal  from 'react-native-modal';
import { Button } from 'react-native';





function Slider() {
    const width = Dimensions.get('window').width;
    const profiles = Data.map(profile => {
        return (
            <Cards
                imgUrl={profile.photoUrl}
                nomeDocente={profile.nomeDocente}
                didatica={profile.didatica}
                metodologia={profile.metodologia}
                comprometimento={profile.comprometimento}
            />

        )
    })

    return (
        <View style={styles.container}>
           

            <View style={styles.melhoresAval}>
                <Text style={styles.melhoresAvalTitle}>Melhores Avaliados</Text>
                <Text>Ver todos</Text>
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
        marginTop: 60
    },
    melhoresAvalTitle: {
        fontSize: 25,
        fontWeight: 700,
    }


})

export default Slider;