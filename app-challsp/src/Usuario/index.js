import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export function Usuario(props) {
    
        return (
    
            
            <View style={styles.user}>
            <Text style={styles.tuser}>{props.data.Nome}</Text>
            <Text style={styles.tuser}>{props.data.Cargo}</Text>
            </View>
            
          );
        }
    
  
    
  

const styles = StyleSheet.create({
    user: {
        width:400,
        height:100,
      backgroundColor: 'blue',
      alignItems: 'start',
      justifyContent: 'center',
      marginTop:10,
      borderRadius:15
    },
    tuser:{
        color:'white',
        fontSize:20,
        marginLeft:10
    }
  });

  
  export default Usuario;