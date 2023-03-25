import LoginScreen from 'react-native-login-screen';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import Styles from '../../Styles/Styles';
import { AuthContext } from '../../contexts/AuthContext'

// import { Container } from './styles';

const LoginPage = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext(AuthContext)


    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular

    });

    if (!fontsLoaded) {
        return null;
    }



    return (
        <View style={{flex:1, backgroundColor: Styles.Colors.colorGreen}}>
            <LoginScreen
                logoImageSource={(require('../../../assets/images/Logo.png'))}
                disableDivider
                disableSocialButtons
                passwordPlaceholder='Digite sua SENHA'
                emailContentTooltip={<Text>Preencha os campos corretamente!</Text>}
                emailPlaceholder='Digite seu USUÁRIO'
                loginButtonStyle={{ backgroundColor: Styles.Colors.colorOrange }}
                signupText='Crie uma CONTA' style={{ marginTop:90, backgroundColor:Styles.Colors.colorGreen }}
                onLoginPress={() => login()}
                onSignupPress={() => { login() }}
                onEmailChange={(value) => {
                    setUsername(value);
                }}
                loginButtonText={'Entrar'}

                onPasswordChange={(value) => {
                    setPassword(value)
                }}
            ></LoginScreen>
        </View>
    )
}
export default LoginPage;

