

import React from 'react';
import {StyleSheet, View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/foto.jpg';
import Card from './components/Card';


const App = () => {

  function handleRedeSocial (rede_social) {
    switch (rede_social) {
      case 'linkedin': Alert.alert ('Meu linkedin', 'https://www.linkedin.com/in/josias-ramos/')
      break
      case 'github': Alert.alert ('Meu github', 'https://github.com/JosiasRP18')
      break
      case 'instagram': Alert.alert ('Meu instagram', 'https://www.instagram.com/jooramos18')
      break
    }
  }
  
  return (
  
  <>
    <View style={style.page}>
      <View style={style.container_cabecalho}> 
        <Image source={foto} style={style.foto} />
        <Text style={style.nome}> Josias Ramos </Text>
        <Text style={style.funcao}> Dev Front-End / Reac Native </Text>
        <View style={style.redes_sociais}>
       <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
           <Icon name="github" type="Feather" size={30} color="#87CEEB" /> 
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
           <Icon name="linkedin" type="Feather" size={30} color="#87CEEB" />
           </TouchableOpacity>

           <TouchableOpacity onPress={()=>handleRedeSocial('instagram')}>
           <Icon name="instagram" type="Feather" size={30} color="#87CEEB" />
           </TouchableOpacity>
        </View> 
        </View>

        <Card titulo="Formação Acadêmica">
        <Text style={style.card_content_text}> Análise e desenvolvimento de Sistemas - Uninabuco </Text>

           </Card>
        <Card titulo="Experiencia Profissional" >
        <Text style={style.card_content_text}> Dev React / React Native - Qintess </Text>
        <Text style={style.card_content_text}> Técnico de Informática - Qintess </Text>
        <Text style={style.card_content_text}> Técnico de Informática - NewSupri </Text>
            </Card> 
        

    </View>
    

    </>
  );
};

const style = StyleSheet.create ({

  page: {
    backgroundColor: '#1C1C2C',
    flex: 1, fontFamily: "Open Sans"
  },
  container_cabecalho: {
     alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },


  foto: {
    width: 200,
     height: 200,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26, 
    fontWeight: 'bold',
    marginTop: 10,
    color: '#E0FFFF', 
  },
  funcao: {
     color: '#E0FFFF',    
      marginTop: 10,
      marginBottom: 10, fontWeight: 'bold',

  },
  redes_sociais: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     width: '60%',
     marginTop: 10,
    alignItems: 'center'
     
  },

  card_content_text : {
    color: "#000",
    marginBottom: 10,
    textAlign: 'center'


  } 

})

export default App;
