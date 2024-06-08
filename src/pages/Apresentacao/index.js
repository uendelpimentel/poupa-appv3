
import {ScrollView, View ,Image} from 'react-native';
import { StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Apresentacao() {
const navigation=useNavigation()


setTimeout(()=>{
navigation.navigate('Entrar');
},3000)

return (
  
  <View   style={estilos.container}>

   <View style={estilos.div}> 
   <Image source={require('./../../../imgs/logo.png')} style={estilos.img} />
   </View>
   

    

 
   
  </View>
  
);
}

  const estilos = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#181818',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
  div:{
    alignItems: 'center',
    justifyContent: 'center',
     
    
  },
    img: {
      width: 404,
      height: 404,
      resizeMode:'cover',
     
    }
  });
