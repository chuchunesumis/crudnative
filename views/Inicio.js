import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
import { NavigationContainer } from '@react-navigation/native';


const Inicio = ({navigation}) => {

  const [clientes, setClientes] = useState([]);
  const [consultarAPI, setConsultarAPI] = useState(true);

  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {

        if(Platform === 'ios') {
          const resultado = await axios.get('http://localhost:3000/clientes');
          setClientes(resultado.data)
          setConsultarAPI(false)
        } else {
          const resultado = await axios.get('http://192.168.2.24:3000/clientes');
          setClientes(resultado.data)
          setConsultarAPI(false)
        }
        
      } catch (error) {
        console.log(error)
      }
    }

    if(consultarAPI) {
      obtenerClientesApi();
    }
  }, [consultarAPI])

  return (
    <View style={globalStyles.contenedor}>

      <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente", { setConsultarAPI }) }>Nuevo Cliente</Button>

      <Headline style={globalStyles.titulo}>{ clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes' }</Headline>

      <FlatList 
        data={clientes}
        keyExtractor={ cliente => (cliente.id).toString()}
        renderItem={ ({item}) => (
          <List.Item 
            title={item.nombre}
            description={item.empresa}
          />
        )}
      />
      <FAB 
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("NuevoCliente", { setConsultarAPI }) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 20
  }
})

export default Inicio;