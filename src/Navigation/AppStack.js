import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import CustomDrawer from '../components/CustomDrawer'
import { Feather } from '@expo/vector-icons'
import Styles from '../Styles/Styles';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';



const Drawer = createDrawerNavigator();

export default function TabNavigator() {
    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold,
        Roboto_400Regular

    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{
            headerShown: false, drawerType: "slide", 
            drawerActiveBackgroundColor: Styles.Colors.colorOrange, 
            drawerActiveTintColor:Styles.Colors.coloWhite,
            drawerInactiveTintColor:"#333"
        }}>
            <Drawer.Screen component={Home} name='Início' options={{
                dra: 'true',
                drawerLabelStyle: { fontSize: 15, fontFamily: 'Roboto_400Regular', marginLeft: -25 },
                drawerIcon: ({color}) => (
                    <Feather name='home' size={22} color={color} />
                )
            }} />
            <Drawer.Screen component={Home} name='Perfil' options={{
                drawerLabelStyle: { fontSize: 15, fontFamily: 'Roboto_400Regular', marginLeft: -25 },
                drawerIcon: ({color}) => (
                    <Feather name='user' size={22} color={color} />
                )
            }} />
            <Drawer.Screen component={Home} name='Meus Docentes' options={{
                drawerLabelStyle: { fontSize: 15, fontFamily: 'Roboto_400Regular', marginLeft: -25 },
                drawerIcon: ({color}) => (
                    <Feather name='book-open' size={22} color={color} />
                )
            }} />
            <Drawer.Screen component={Home} name='Configurações' options={{
                drawerLabelStyle: { fontSize: 15, fontFamily: 'Roboto_400Regular', marginLeft: -25 },
                drawerIcon: ({color}) => (
                    <Feather name='settings' size={22} color={color} />
                )
            }} />
        </Drawer.Navigator>

    )

}