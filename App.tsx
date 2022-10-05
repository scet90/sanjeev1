import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Hello from './component/Hello';
import Greet from './Greet';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>Sanjeev</Text>
      </View>
      <View>
        <Greet />
        <Hello />
      </View>
    </SafeAreaView>
  );
};
export default App;
