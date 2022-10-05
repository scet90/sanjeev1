import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
const Greet = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Greet</Text>
      </View>
    </SafeAreaView>
  );
};
export default Greet;
