import { AuthProvider } from './src/contexts/AuthContext';
import NavApp from './src/Navigation/NavApp';


export default function App() {
  return (
    <AuthProvider>
        <NavApp/>
    </AuthProvider>

  )

}

