import LoginScreen from 'react-native-login-screen';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';




import React from 'react';
import { TextInput, View } from 'react-native';
import Styles from '../../Styles/Styles';

// import { Container } from './styles';

const LoginPage = () => {
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular

    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <LoginScreen
                disableSocialButtons
                passwordPlaceholder='Digite sua SENHA'
                emailContentTooltip='Verifique se os dados estão corretos!'
                emailPlaceholder='Digite seu USUÁRIO'
                loginButtonStyle={{ backgroundColor: Styles.Colors.colorOrange }}
                signupText='Crie uma CONTA' style={{ backgroundColor: Styles.Colors.colorGreen }}
                onLoginPress={() => { }}
                onSignupPress={() => { }}
                onEmailChange={() => {
                    username = value;
                }}
                loginButtonText={'Entrar'}

                onPasswordChange={() => { }}
            />
        </View>

    )
}

export default LoginPage;

