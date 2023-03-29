import { useEffect, useState, createContext, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from '../services/API.js'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const api = API()

    const [userData, setUserData] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [userToken, setUserToken] = useState(null)


    const login = async (username, password) => {
        setisLoading(true)
        const data = await api.logar(username, password)
        if (data.auth && data.token) {
            const token = await AsyncStorage.setItem('token', data.token)
            setUserToken(token)
            setUserData(data.user[0])
            console.log(data.user)
            setisLoading(false)
        }
    }

    const validaToken = () => {
        setisLoading(true)
        AsyncStorage.getItem('token')
        setisLoading(false)

    }

    const logOut = () => {
        setUserToken(null)
        AsyncStorage.removeItem('token')

    }
    const SignIn = () => {

    }

    const IsLoggedIn = async () => {
        try {
            setisLoading(true)
            const userToken = await AsyncStorage.getItem('token')
            if (userToken) {
                setUserToken(userToken)
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
    useEffect(() => {
        IsLoggedIn()

    }, [userToken])


    return (
        <AuthContext.Provider value={{ userData, login, logOut, IsLoggedIn, SignIn, userToken }}>
            {children}
        </AuthContext.Provider>
    );
}