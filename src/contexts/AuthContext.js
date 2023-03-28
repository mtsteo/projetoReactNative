import { useEffect, useState, createContext, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {API} from '../services/API.js'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const api = API()
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [userToken, setUserToken] = useState(null)





    const login = async () => {
        setisLoading(true)
        const token = await AsyncStorage.setItem('token', '1236566')
        setUserToken(token)
        setisLoading(false)
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
            if(userToken){
                setUserToken(userToken)
            }else{
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
        <AuthContext.Provider value={{ user, login, logOut, IsLoggedIn, SignIn, userToken }}>
            {children}
        </AuthContext.Provider>
    );
}