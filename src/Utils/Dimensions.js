import { Dimensions, StatusBar } from 'react-native';



export const Dim= {
        WIDTH: Dimensions.get('window').width,
        HEIGHT: Dimensions.get('window').height,
        STATUSBAR: StatusBar.currentHeight

} 