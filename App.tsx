import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import Hello from './component/Hello';
// import Greet from './Greet';
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Sanjeev</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>
          Hello <Text style={styles.italicText}>Sanjeev</Text>
        </Text>
        <Text>Hello Deepanshi</Text>
        <Text>Hello Tanishka</Text>
        <Text>Hello Harshit</Text>
      </View>
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
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
});

export default App;
