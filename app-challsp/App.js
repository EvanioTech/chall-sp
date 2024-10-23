import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Usuario  from './src/Usuario';
import { useState } from 'react';
export default function App() {
  const [feed,setFeed]= useState([
    {
      id : '1', Nome: 'Nome: Matias', Cargo:'Cargo: Developer React Native'
    },
    {
       id : '1', Nome: 'Nome: Edson', Cargo:'Cargo: Developer React '
    }
  ])
  return (
    <View style={styles.container}>
      <Text style={{fontSize:30,fontWeight:'bold'}}>Seja bem vindo!</Text>
      <FlatList
      showsVerticalScrollIndicator={false}
      data={feed}
      renderItem={({item}) => <Usuario data={item}/>}
      />
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    
  },
});
