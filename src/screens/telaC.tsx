import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export function telaC() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LOGOUT</Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textBotao}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffcc",
        justifyContent: "center",
        
    },
    titulo:{
        alignSelf: "center",
        fontSize: 30,
        fontWeight: 'bold'
    },

    botao:{
        width: '70%',
        height: '6%',
        backgroundColor: '#2ab76b',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
        alignSelf: 'center',
        borderWidth: 1

        
    }, 
    textBotao:{
        color: 'white',
        fontWeight: 'bold'
      },
    
   
})