import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Cadastrar from './src/pages/Cadastrar';
import Login from './src/pages/Login';
import Apresentacao from './src/pages/Apresentacao';
import Entrar from './src/pages/Entrar';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Entrar"screenOptions={{headerShown: false }}>
        <Stack.Screen name="Apresentacao" component={Apresentacao}/>  
        <Stack.Screen name="Entrar" component={Entrar}/>  
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}