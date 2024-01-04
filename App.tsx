import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import HotelsScreen from "./src/screens/HotelsScreen";

function App(): JSX.Element {

  return (
    <SafeAreaView style={{backgroundColor:'lightgrey'}}>
      <HotelsScreen/>
    </SafeAreaView>
  );
}


export default App;
