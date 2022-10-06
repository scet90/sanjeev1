import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
// import Hello from './component/Hello';
// import Greet from './Greet';

type Person = {
  name: string;
  age: number;
};

const App = () => {
  const [name, setName] = useState<string>('Sanjeev');
  const [age, setAge] = useState<number>(30);

  return (
    <View style={styles.container}>
      {/* Name Field Start */}
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Name ..."
        onChangeText={(value: string) => setName(value)}
      />

      {/* Age Field Start */}
      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Age ..."
        onChangeText={(value: string) => setAge(+value)}
        keyboardType="numeric"
      />

      <Text>
        Name: {name}, age:{age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default App;
