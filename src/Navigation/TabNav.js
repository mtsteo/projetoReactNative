import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Styles from '../Styles/Styles';
import Slider from '../components/Slider';
import Ranking from '../screens/Ranking';
import MeusDocentes from '../screens/MeusDocentes';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Header from '../components/Header';
import { View } from 'react-native';



const Tab = createBottomTabNavigator();

export default function TabNav({ navigation }) {

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{flex:1}}>

            <Tab.Navigator screenOptions={{
                header: (({ navigation }) => {
                    return (<Header navigation={navigation} name='Mateus' />)
                }),
                headerStatusBarHeight: 0,
                tabBarHideOnKeyboard: true,
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
                <Tab.Screen name='Início' component={Slider} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={25} color={color} />
                    ),
                }} />
                <Tab.Screen name='Ranking' component={Ranking} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="trophy" size={25} color={color} />
                    ),
                }} />
                <Tab.Screen name='Meus Docentes' component={MeusDocentes} options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="people" size={25} color={color} />
                    ),
                }} />
            </Tab.Navigator>
        </View>
    )
}