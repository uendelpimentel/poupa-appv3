import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function Login({ navigation }) {

  let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

  function AcessarCadastro() {
    navigation.navigate('Cadastrar')
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isEmptyLogin, setIsEmptyLogin] = useState(false);
  const [isEmptySenha, setIsEmptySenha] = useState(false);



  function fnValidar() {
    let sLogin = login;
    let sSenha = senha;

    if (sLogin == '') {
      setIsEmptyLogin(true);
    } else {
      navigation.navigate('Inicio')
    }

    if (sSenha == '') {
      setIsEmptySenha(true);
    } else {
      navigation.navigate('Inicio')
    }

     if(sSenha!=''&& sLogin!=''){
      
      navigation.navigate('Home')
      console.log('entrou');
      
    }
  }



  return (
    <View style={estilos.container}>

      <StatusBar></StatusBar>

      <Image source={require('./../../../imgs/logo.png')} style={estilos.logo} />

      <View style={estilos.campos}>

        <TextInput
          style={estilos.input}
          keyboardType="email-address"
          placeholder='E-mail'
          placeholderTextColor={"#000"}
          value={login}
          onChangeText={(text) => setLogin(text)} />

        <Text style={estilos.alerta}>
          {isEmptyLogin == true ? "Campo Vazio" : ""}
        </Text>


        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor={"#000"}
          value={senha}
          onChangeText={(text) => setSenha(text)} />

        <Text style={estilos.alerta}>
          {isEmptySenha == true ? "Campo Vazio" : ""}
        </Text>

        <View style={{alignItems: 'rigth',
    width:'89%',marginTop:-17}}>
          <TouchableOpacity>
          <Text style={estilos.texto1}>Esqueceu a senha?</Text>
        </TouchableOpacity>
          </View>
      

      </View>

     

      <Text style={estilos.texto1}>
        Não tem uma conta?
      </Text>

      <TouchableOpacity
        onPress={AcessarCadastro}>
        <Text style={estilos.texto2}>
          Criar agora!
        </Text>
        
      </TouchableOpacity>


      <TouchableOpacity 
      style={estilos.button}
      onPress={fnValidar}
      >
        <Text style={{fontFamily:'Montserrat',
          fontWeight: '700',}}>
          LOGIN
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  campos: {
    backgroundColor: "#030303",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 23,
    width: "88%",
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    height:'20%',

  },

  input: {
    marginTop:10,
    fontFamily:'Montserrat',
    fontWeight: '500',
    placeholderTextColor: '#dfdfdf',
    backgroundColor: '#1E1E1E',
    width: "90%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 5,
    height:35,
  },

  texto1: {
    color: "#00B14D",
    fontSize: 12,
    textAlign: 'right',
    
  },
  texto2: {
    color: "#fff",
    fontSize: 15,
    marginBottom:62,
  },

  alerta: {
    color: "#ff0000",
    fontSize: 12,
    marginTop: -10,
    marginBottom: -10,
  },

  button: {
    backgroundColor: "#00B14D",
    width: "88%",
    height:40,
    alignItems: "center",
    alignContent:"center",
    justifyContent:"center",
    marginTop: 150,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 30,
    fontFamily:'Montserrat',
    fontWeight: '600',
  },

  logo: {
    marginTop:20,
    width:350,
    height: 350,
  }
});