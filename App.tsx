import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
// import Hello from './component/Hello';
// import Greet from './Greet';

type Person = {
  name: string;
  age: number;
};

const App = () => {
  const [name, setName] = useState<string>('Sanjeev');
  const [person, setPerson] = useState<Person>({name: 'Harshit', age: 7});

  const clickHandler = () => {
    setName('Harshit');
    setPerson({...person, name: 'Kanha', age: 8.8});
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <view style={styles.buttonContainer}>
        <Button title="Update state" onPress={clickHandler} />
      </view>
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
});

export default App;
