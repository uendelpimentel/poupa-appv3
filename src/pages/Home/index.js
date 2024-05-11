import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

export default function Home({ navigation }) {

  function AcessarCadastro() {
    navigation.navigate('Cadastrar')

  }

  function AcessarLogin() {
    navigation.navigate('Login')

  }

  return (
    <View style={estilos.container}>

      <StatusBar></StatusBar>

      <Image source={require('./../../../imgs/logo.png')} style={estilos.logo} />

      <View style={estilos.campos}>

        <Text style={estilos.texto1}>
          Faça seu login ou cadastre-se para continuar
        </Text>

        <View style={estilos.button1}>

          <TouchableOpacity
            style={estilos.button2}
            onPress={AcessarLogin}>
            <Text style={estilos.texto2}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.button2}
            onPress={AcessarCadastro}>
            <Text style={estilos.texto2}>
              CADASTRAR
            </Text>
          </TouchableOpacity>

        </View>

      </View>

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
  },

  input: {
    backgroundColor: '#fff',
    width: "80%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 8,
  },

  texto1: {
    color: "#fff",
    fontSize: 15,
    textAlign: 'center',
  },

  texto2: {
    color: "#00B14D",
    fontSize: 15,
  },

  button1: {
    flexDirection: 'row',
    gap: 6,
  },

  button2: {
    backgroundColor: "#090909",
    borderColor: "#fff",
    width: "40%",
    alignItems: "center",
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },

  logo: {
    width: 304,
    height: 304,
    marginTop: -80,
  }
});