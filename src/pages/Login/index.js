import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useState } from 'react';

export default function Login({ navigation }) {

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
      setIsEmptyLogin(true);
    } else {
      navigation.navigate('Inicio')
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
          placeholder='Email'
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


        <TouchableOpacity>
          <Text style={estilos.texto1}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity 
      style={estilos.button}
      onPress={fnValidar}
      >
        <Text>
          LOGIN
        </Text>
      </TouchableOpacity>

      <Text style={estilos.texto1}>
        Não tem uma conta?
      </Text>

      <TouchableOpacity
        onPress={AcessarCadastro}>
        <Text style={estilos.texto2}>
          Criar agora!
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#0e0e0e',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  campos: {
    backgroundColor: "#030303",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    width: "88%",
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
  },

  input: {
    backgroundColor: '#fff',
    width: "80%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  texto1: {
    color: "#00B14D",
    fontSize: 12,
  },

  texto2: {
    color: "#fff",
    fontSize: 15,
  },

  alerta: {
    color: "#ff0000",
    fontSize: 12,
    marginTop: -10,
    marginBottom: -10,
  },

  button: {
    backgroundColor: "#00B14D",
    width: "48%",
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 30,
  },

  logo: {
    width: 304,
    height: 304,
  }
});