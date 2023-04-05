import React, { useContext } from 'react';
import { TouchableOpacity, View, Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { Text } from 'react-native';
import Styles from '../../Styles/Styles';
import { useFonts, Roboto_100Thin, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Feather } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/AuthContext'

const CustomDrawer = (props) => {
  const { logOut, userData } = useContext(AuthContext)


  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 30, borderBottomEndRadius: 20, borderBottomStartRadius: 20, justifyContent: "space-between", backgroundColor: Styles.Colors.colorGreen }}>
      <Image source={!userData.fotoRef ? {uri:`https://storage.googleapis.com/sistemaaval/0.png`}:
                    {uri:`https://storage.googleapis.com/sistemaaval/${userData.fotoRef}.jpg`}} style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10,backgroundColor: 'rgba(255,255,255, 0.5)', }} />
        <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, color: Styles.Colors.coloWhite }}>{userData.nome_discente + " " + userData.sobrenome}</Text>
      </View>
      <DrawerContentScrollView {...props}  >

        <View style={{ backgroundColor: Styles.Colors.coloWhite }}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => { logOut() }} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name="log-out" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sair
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;