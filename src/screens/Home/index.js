import { StyleSheet, View, StatusBar } from 'react-native';
import Styles from '../../Styles/Styles';
import Header from '../../components/Header';
import TabNav from '../../Navigation/TabNav';
import { Text} from 'react-native';




const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header navigation ={navigation} name='Mateus'/>
      <TabNav/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: Styles.colorGreen,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingEnd: 16,
    paddingStart: 15,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,

  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",

  },
  username: {
    fontSize: 25,
    fontWeight: 700,
    color: Styles.coloWhite,

  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2
  },
  melhoresAval:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginStart:20,
    marginEnd:20,
    marginTop:20
  }

})
