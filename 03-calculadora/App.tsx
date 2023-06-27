import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { CalculadoraScreen } from './src/screen/CalculadoraScreen';
import { style } from './src/themes/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={style.fondo}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculadoraScreen/>
    </SafeAreaView>
  );
};

export default App;
