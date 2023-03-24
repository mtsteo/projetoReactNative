import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles from '../Styles/Styles';
import Slider from '../components/Slider';
import Ranking from '../screens/Ranking';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Header from '../components/Header';



const Tab = createBottomTabNavigator();

export default function TabNav({navigation}) {

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Tab.Navigator screenOptions={{
            header:(({navigation})=>{
            return(<Header navigation={navigation}  name='Mateus'/>)
            }),
            tabBarHideOnKeyboard:true,
            tabBarActiveTintColor: Styles.Colors.colorOrange,
            tabBarInactiveTintColor: Styles.Colors.coloWhite,
            tabBarShowLabel: true,
            tabBarLabelStyle: {
                marginBottom: 10
            },
            tabBarStyle: {
                backgroundColor: Styles.Colors.colorGreen,
                height: 60
            },

        }}>
            <Tab.Screen name='Home' component={Slider} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="home" size={25} color={color} />
                ),
            }} />
            <Tab.Screen name='Ranking' component={Ranking} options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="trophy" size={25} color={color} />
                ),
            }} />
        </Tab.Navigator>
    )
}