import LoginScreen from 'react-native-login-screen';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from '../../Styles/Styles';
import { AuthContext } from '../../contexts/AuthContext.js'
import Modal from 'react-native-modal';
import PopupLayout from '../../components/PopupLayout';
import { TouchableOpacity } from 'react-native';


const LoginPage = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [erroMsg, setErroMsg] = useState(false)

    const { login } = useContext(AuthContext)

    const handleLogin = async () => {
        if (username && password) {
            const auth = await login(username, password)
            if (!auth) {
                setErroMsg(true)
            }
            else{
                setErroMsg(false)
            }
        }else{
            setErroMsg(true)
        }
    }

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: Styles.Colors.colorGreen }}>
            <Modal
                isVisible={erroMsg}
                style={{ flex: 1, }}>
                <View>
                    <PopupLayout
                        msg="Humm... Dados incorretos! verifique e tente novamente."
                    />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity style={styles.buttonClose} onPress={() => setErroMsg(!erroMsg)}>
                        <Text style={{ fontFamily: "Roboto_400Regular", fontSize: 15, color: "#fff" }}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <LoginScreen
                disableEmailValidation
                logoImageSource={(require('../../../assets/images/Logo.png'))}
                disableDivider
                disableSocialButtons
                passwordPlaceholder='Digite sua SENHA'
                emailPlaceholder='Digite seu USUÁRIO'
                loginButtonStyle={{ backgroundColor: Styles.Colors.colorOrange }}
                signupText='Esqueci minha SENHA!' style={{ marginTop: 90, backgroundColor: Styles.Colors.colorGreen }}
                onLoginPress={() => { handleLogin() }}
                onSignupPress={() => navigation.navigate('Recuperar Senha')}
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
const styles = StyleSheet.create({
    buttonClose: {
        marginTop: 10,
        width: 60,
        backgroundColor: Styles.Colors.colorOrange,
        borderRadius: 5,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }


})
export default LoginPage;

