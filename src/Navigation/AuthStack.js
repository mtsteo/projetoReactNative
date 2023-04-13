import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/loginPage/';
import RecoveryPage from '../screens/RecoveryPage';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import Styles from '../Styles/Styles';


const Stack = createNativeStackNavigator();


export default function AuthStack() {
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerShown: false
            }} component={LoginPage} name='login' />
            <Stack.Screen options={{
                headerShown: true,
                headerTitleStyle:{fontFamily:"Roboto_700Bold", color:Styles.Colors.coloWhite},
                headerTintColor:'white',
                headerStyle: { backgroundColor: Styles.Colors.colorGreen }
            }} component={RecoveryPage} name='Recuperar Senha' />
        </Stack.Navigator>
    )
}
