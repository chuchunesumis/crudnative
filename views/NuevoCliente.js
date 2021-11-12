import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Headline, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

const NuevoCliente = () => {

  // Campos formularios
  const [ nombre, guardarNombre ] = useState('');
  const [ telefono, guardarTelefono ] = useState('');
  const [ correo, guardarCorreo ] = useState('');
  const [ empresa, guardarEmpresa ] = useState('');

  const leerNombre = () => {
    console.log('Escribiendo...') 
  }

  return (
    <View style={globalStyles.contenedor}>
      
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      
      <TextInput 
        label="Nombre"
        placeholder="Chuchu Nesumis"
        onChangeText={ () => leerNombre() }
        style={styles.input}
      />
      <TextInput 
        label="Teléfono"
        placeholder="04120000000"
        onChangeText={ () => leerNombre() }
        style={styles.input}
      />
      <TextInput 
        label="E-mail"
        placeholder="correo@correo.com"
        onChangeText={ () => leerNombre() }
        style={styles.input}
      />
      <TextInput 
        label="Empresa"
        placeholder="Nombre de la empresa"
        onChangeText={ () => leerNombre() }
        style={styles.input}
      />
    </View>
  )  
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent'
  }
})

export default NuevoCliente;