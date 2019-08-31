import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const [state, setState] = useState({
    input: '',
  })

  const handlePress = () => {
    alert(`Hello ${state.input}`)
  }
  
  const handleChangeText = (text) => {
    setState({
      ...state,
      input: text.trim()
    })
  }

  return (
    <View style={styles.container}>
      <Text >Hello, enter your name</Text>
      <TextInput
        onChangeText={ (text) => handleChangeText(text) }
        value={ state.value }
        style={ styles.inputField }
      />
      <Button 
        title="Enter"
        onPress={handlePress}
        disabled={ state.input.length <= 0 }
        style={ styles.button }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputField: {
    height: 30, 
    width: 150,
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
    marginTop: 25,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
