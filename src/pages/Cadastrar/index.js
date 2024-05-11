import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useState } from 'react';

export default function Cadastrar({ navigation }) {

  function AcessarLogin() {
    navigation.navigate('Login')
  }

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');

  const [isEmptyNome, setIsEmptyNome] = useState(false);
  const [isEmptySobrenome, setIsEmptySobrenome] = useState(false);
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptySenha1, setIsEmptySenha1] = useState(false);
  const [isEmptySenha2, setIsEmptySenha2] = useState(false);

  function fnValidar() {
    let sNome = nome;
    let sSobrenome = sobrenome;
    let sEmail = email;
    let sSenha1 = senha1;
    let sSenha2 = senha2;

    if (sNome == '') {
      setIsEmptyNome(true);
    } else {
      navigation.navigate('Inicio')
    }

    if (sSobrenome == '') {
      setIsEmptySobrenome(true);
    } else {
      navigation.navigate('Inicio')
    }

    if (sEmail == '') {
      setIsEmptyEmail(true);
    } else {
      navigation.navigate('Inicio')
    }

    if (sSenha1 == '') {
      setIsEmptySenha1(true);
    } else {
      navigation.navigate('Inicio')
    }

    if (sSenha2 == '') {
      setIsEmptySenha2(true);
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
          placeholder='Nome'
          placeholderTextColor={"#000"}
          value={nome}
          onChangeText={(text) => setNome(text)} />

        <Text style={estilos.alerta}>
          {isEmptyNome == true ? "Campo Vazio" : ""}
        </Text>

        <TextInput
          style={estilos.input}
          placeholder='Sobrenome'
          placeholderTextColor={"#000"}
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text)} />

        <Text style={estilos.alerta}>
          {isEmptySobrenome == true ? "Campo Vazio" : ""}
        </Text>

        <TextInput
          style={estilos.input}
          keyboardType="email-address"
          placeholder='Email'
          placeholderTextColor={"#000"}
          value={email}
          onChangeText={(text) => setEmail(text)} />

        <Text style={estilos.alerta}>
          {isEmptyEmail == true ? "Campo Vazio" : ""}
        </Text>

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor={"#000"}
          value={senha1}
          onChangeText={(text) => setSenha1(text)} />

        <Text style={estilos.alerta}>
          {isEmptySenha1 == true ? "Campo Vazio" : ""}
        </Text>

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Confirmar Senha'
          placeholderTextColor={"#000"}
          value={senha2}
          onChangeText={(text) => setSenha2(text)} />

        <Text style={estilos.alerta}>
          {isEmptySenha2 == true ? "Campo Vazio" : ""}
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
          CADASTRAR
        </Text>
      </TouchableOpacity>

      <Text style={estilos.texto1}>
        Já tem uma conta?
      </Text>

      <TouchableOpacity
        onPress={AcessarLogin}
      >
        <Text style={estilos.texto2}>
          Logar agora!
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
    gap: 20,
    width: "88%",
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: -60,
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
    marginTop: -15,
    marginBottom: -15,
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
    width: 260,
    height: 260,
    marginTop: -80,
  }
});