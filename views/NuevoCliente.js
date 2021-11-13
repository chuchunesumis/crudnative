import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

const NuevoCliente = () => {

  // Campos formularios
  const [ nombre, guardarNombre ] = useState('');
  const [ telefono, guardarTelefono ] = useState('');
  const [ correo, guardarCorreo ] = useState('');
  const [ empresa, guardarEmpresa ] = useState('');
  const [ alerta, guardarAlerta ] = useState(false);

  // Almacena el cliente en la DB
  const guardarCliente = async () => {
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
    // Validar
      guardarAlerta(true)
      return;
    }
    console.log('Guardando...')

    // Generar el cliente
    const cliente = { nombre, telefono, empresa, correo };
    // console.log(cliente)

    // Guardar el cliente en la API
    try {
      if(Platform === 'ios') {
        await axios.post('http://localhost:3000/clientes', cliente);
      } else {
        await axios.post('http://192.168.2.24:3000/clientes', cliente);
      }
    } catch (error) {
      console.log(error)
    }
    
    // Redireccionar


    // Limpiar el form (opcional)

  }

  return (
    <View style={globalStyles.contenedor}>
      
      <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
      
      <TextInput 
        label="Nombre"
        placeholder="Chuchu Nesumis"
        onChangeText={ (texto) => guardarNombre(texto) }
        value={nombre}
        style={styles.input}
      />
      <TextInput 
        label="Teléfono"
        placeholder="04120000000"
        onChangeText={ (texto) => guardarTelefono(texto) }
        value={telefono}
         style={styles.input}
      />
      <TextInput 
        label="E-mail"
        placeholder="correo@correo.com"
        onChangeText={ (texto) => guardarCorreo(texto) }
        value={correo}
        style={styles.input}
      />
      <TextInput 
        label="Empresa"
        placeholder="Nombre de la empresa"
        onChangeText={ (texto) => guardarEmpresa(texto) }
        value={empresa}
        style={styles.input}
      />

      <Button 
        icon="pencil-circle" 
        mode="contained"
        onPress={() => guardarCliente()}
      >
        Guardar Cliente
      </Button>

      <Portal>
        <Dialog
          visible={alerta}
          onDismiss={ () => guardarAlerta(false) }
        >
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Paragraph>Todos los campos son obligatorios</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={ () => guardarAlerta(false) }
            >OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
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