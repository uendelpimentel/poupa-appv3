import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Cadastrar from './src/pages/Cadastrar';
import Login from './src/pages/Login';
import Entrar from './src/pages/Entrar';


const Stack = createStackNavigator();

export default function Inicio() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Entrar"screenOptions={{headerShown: false }}>
        <Stack.Screen name="Entrar" component={Entrar}/>  
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inicio" component={Inicio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}