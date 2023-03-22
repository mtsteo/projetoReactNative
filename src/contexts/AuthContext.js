import { useEffect, useState, createContext, } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(false);
    const [userToken, setUserToken] =  useState(null)


    useEffect(()=>{
        IsLoggedIn()

    },[])


   const login = () =>{
        setisLoading(true)
        AsyncStorage.setItem('token', '123456')
        setisLoading(false)
   }

   const validaToken = () =>{
    setisLoading(true)
    AsyncStorage.getItem('token')
    setisLoading(false)

   }

   const logOut = ()=>{
    setisLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('token')
    setisLoading(false)

   }
   const SignIn = ()=>{

   }

   const IsLoggedIn = async ()=>{
        try {
            setisLoading(true)
            let userToken = await AsyncStorage.getItem('token')
            setUserToken(userToken)
            
        } catch (error) {
            console.log(error)
        }
   }


    return (
        <AuthContext.Provider value={{ user, login, logOut, IsLoggedIn, SignIn, userToken }}>
            {children}
        </AuthContext.Provider>
    );
}