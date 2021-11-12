import { StyleSheet } from "react-native";

const style = StyleSheet.create ({

      card_container:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   
    marginTop: 20

  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0FFFF",
    padding: 10,
    backgroundColor: '#E0FFFF',
   
  },
  card_header: {
    borderColor: "#E0FFFF", 


  },
  card_content: {
    borderColor: "#F0F8FF",
    marginTop: 10,
    
    

  


  }, 
  card_titulo: {
    textAlign: 'center', 
    color: "#000", fontWeight: 'bold',  
  }

})

export default style;