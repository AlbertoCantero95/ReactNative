/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { style } from '../themes/appTheme';

interface Props {
    texto:  string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto:string) => void
}

export const BotonCalc = ( {texto, color = '#2D2D2D', ancho, accion}:Props ) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={{...style.boton,
          backgroundColor:color,
          width: (ancho) ? 170 : 80,
          }}>
          <Text style={{
              ...style.botonTexto,
              color: ( color === '#9B9B9B' ) ? 'black' : 'white',
              }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  );
};
