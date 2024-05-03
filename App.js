import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    setTareas([...tareas, { id: Date.now().toString(), tarea: nuevaTarea }]);
    setNuevaTarea('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese una nueva tarea"
          onChangeText={texto => setNuevaTarea(texto)}
          value={nuevaTarea}
        />
        <Button
          title="Agregar"
          onPress={agregarTarea}
        />
      </View>
      <FlatList
        data={tareas}
        renderItem={({ item }) => <Text style={styles.item}>{item.tarea}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center'
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});
