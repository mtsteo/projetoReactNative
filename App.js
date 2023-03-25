import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import NavApp from './src/Navigation/NavApp';


export default function App() {
  
  return (
    <AuthProvider>
      <StatusBar  backgroundColor="transparent" translucent={true} />
        <NavApp/>
    </AuthProvider>
  )

}

