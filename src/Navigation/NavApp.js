import React, { useContext } from 'react';
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { AuthContext} from '../contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

const NavApp = () => {
    const {userToken} = useContext(AuthContext)

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack/> : <AuthStack/>   }
        </NavigationContainer>
        
    )

}

export default NavApp;