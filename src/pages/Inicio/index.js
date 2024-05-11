import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';

export default function Home({ navigation }) {

    return (
        <View style={estilos.container}>

            <StatusBar></StatusBar>
           
            <View>
                
                <Text style={estilos.texto3}>
                    GASTOS
                </Text>

            </View>


            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Headset da JBL
                </Text>
                <Text style={estilos.textoPreco1}>
                    R$100,00
                </Text>
                <Text style={estilos.texto2}>
                    14:01 | só comprei pq eu precisav...
                </Text>

            </View>
            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Marmita
                </Text>

                <Text style={estilos.texto2}>
                    12:17 | o frete do local aumentou
                </Text>

            </View>
            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Café no Rezende
                </Text>

                <Text style={estilos.texto2}>
                    09:33
                </Text>

            </View>
            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Moletom da Nike
                </Text>

                <Text style={estilos.texto2}>
                    18:27 | ficou frio e passei na james...
                </Text>

            </View>
            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Marmita
                </Text>

                <Text style={estilos.texto2}>
                    12:24
                </Text>

            </View>
            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Lanche do King Mek
                </Text>

                <Text style={estilos.texto2}>
                    20:06
                </Text>

            </View>
            <View style={estilos.campos}>

                <Text style={estilos.texto1}>
                    Marmita
                </Text>

                <Text style={estilos.texto2}>
                    12:07
                </Text>

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
        gap: 20,
        width: "90%",
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15,
        paddingHorizontal: 15,
    },

    texto1: {
        color: "#fff",
        fontSize: 15,
        textAlign: 'left',
    },

    texto2: {
        color: "#fff",
        fontSize: 10,
        textAlign: 'left',
        marginTop: -20,
    },

    texto3: {
        color: "#fff",
        fontSize: 20,
        textAlign: 'left',
        
    },

    flex: {
        display: 'flex',
        justifyContent: 'flex-start'
    },
    textoPreco1: {
        
      
        color: '#ffa88',
       textAlign:'left',
       
        
        
    }

});