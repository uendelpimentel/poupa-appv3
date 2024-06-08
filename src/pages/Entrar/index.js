import React, { useState, useEffect } from 'react';
import { View, Image, Animated,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-web';
import { useFonts } from 'expo-font';



const INITIAL_DELAY = 4000; // Adjust for desired pause duration
const ANIMATION_DURATION = 1000; // Adjust for desired animation speed

export default function Entrar() {

  const [] = useFonts({ 'Montserrat-VariableFont_wght': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

  const navigation = useNavigation();
  function AcessarLogin() {
    navigation.navigate('Login')
  }
  function AcessarCadastrar() {
    navigation.navigate('Cadastrar')
  }
  
 
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      Animated.parallel([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true, // Optimize performance (if applicable)
        }),
        Animated.timing(animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }), {
          toValue: 1,
          duration: ANIMATION_DURATION,
          useNativeDriver: true, // Optimize performance (if applicable)
        }),
      ]).start(() => {
        // Optionally delay navigation after animation
        // setTimeout(() => navigation.navigate('Login'), 1000);
      });
    }, INITIAL_DELAY);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []);

  return (
    <View style={estilos.container}>
      {/* Animate logo */}
      <Animated.View
        style={{
          transform: [{ translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, -172] }) }],
          position: 'absolute', // Use 'absolute' for logo
          top: 240, // Adjust initial position as needed
          left: 31,
        }}
      >
        <Image source={require('./../../../imgs/logo.png')} style={estilos.img} />
      </Animated.View>

      {/* Animate text div with fade-in effect, keeping it at initial position */}
      <Animated.View
        style={{
          position: 'absolute', // Use 'absolute' for positioning
          top: 780, // Set initial position below the logo
          left: 30,
          opacity: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0, 1] ,extrapolate: 'clamp'}), // Fade in from 0 to 1 opacity
          width: '85%',
          height:'10%'
          
        }}
      >
        <View style={estilos.div2}>
          
          <Text style={estilos.text1}>Faça seu Login ou cadastre-se para continuar</Text>
          <View style={{flexDirection: 'row',width:'100%',height:"100%",paddingTop:10 ,gap:2}}>   
            <TouchableOpacity style={estilos.btnLogin}
            onPress={AcessarLogin}>
            <Text style={estilos.text2}
            
            >
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity  style={estilos.btnLogin}
          onPress={AcessarCadastrar}
          >
            <Text style={estilos.text2}>
              CADASTRAR
            </Text>
          </TouchableOpacity> </View>  
        
        </View>
      </Animated.View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div2: {
    
    backgroundColor: 'black',
    width: '100%',
    height: '100%', // Adjust width as needed
    padding: 10,
    borderRadius: 5, // Add styling for better visibility

  },
  text1:{
    color:"#ffffff",
    textAlign:"center",
    fontFamily:'Montserrat-VariableFont_wght',
    fontSize: 14,
    fontWeight: '400',
  },
  btnLogin:{
   marginTop:5,
   backgroundColor:"#1E1E1E",
   width:"40%",
   height:'45%',
   marginLeft:20,
   borderRadius:5,
   alignContent:"center",
   alignItems:"center",

  },
  text2:{
    width: '100%',
    height: '100%',
    color:'#00B14D',
    textAlign:"center",
    alignContent:"center",
    alignItems:"center",
    fontFamily:'Montserrat-VariableFont_wght',
    fontSize: 13,
    fontWeight: '800',
   
  },

  img: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
