import { useFonts, Roboto_100Thin, Roboto_700Bold } from '@expo-google-fonts/roboto';


export default Fonts = () => {

    const [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (Roboto_700Bold)
}
