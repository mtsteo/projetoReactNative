import { useEffect, useState, createContext, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from '../services/API.js'
import { RectButton } from "react-native-gesture-handler";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const api = API()

    const [userData, setUserData] = useState([]);
    const [userDocentes, setUserDocentes] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [userToken, setUserToken] = useState(null)



    const login = async (username, password) => {
        setisLoading(true)
        const data = await api.logar(username, password)
        if (data.auth && data.token) {
            const token = await AsyncStorage.setItem('token', data.token)
            setUserToken(token)
            setUserData(data.user.data[0])
            setUserDocentes(data.user.meusdocentes)
            setisLoading(false)
            return true
        }
        else{
            return false
        }
        
    }


    const logOut = () => {
        setisLoading(true)
        setUserToken(null)
        setisLoading(false)
        AsyncStorage.removeItem('token')

    }
    const SignIn = () => {

    }

    const IsLoggedIn = async () => {
        try {
            setisLoading(true)
            const userToken = await AsyncStorage.getItem('token')
            if (userToken) {
                const isValidade = await api.validarToken(userToken)
                if (isValidade.auth) {
                    setUserToken(userToken)
                    setUserData(isValidade.user.data[0])
                    setUserDocentes(isValidade.user.meusdocentes)
                }
            } else {
                setUserToken(null)
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        IsLoggedIn()

    }, [])



    return (
        <AuthContext.Provider value={{ userData, userDocentes, login, logOut, IsLoggedIn, SignIn, userToken }}>
            {children}
        </AuthContext.Provider>
    );
}