import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/loginPage/';
import RegisterPage from '../screens/RegisterPage';
import AppStack from './AppStack'


const Stack = createNativeStackNavigator();


export default function AuthStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen options={{
                    headerShown: false
                }} component={LoginPage} name='login' />
                <Stack.Screen options={{
                    headerShown: false
                }} component={RegisterPage} name='register' />
                <Stack.Screen options={{
                    headerShown: false
                }} component={AppStack} name='AppStack' />
            </Stack.Navigator>
    )
}
