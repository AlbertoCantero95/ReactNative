import React, { useRef, useState } from 'react';
import {View, Text} from 'react-native';
import { style } from '../themes/appTheme';
import { BotonCalc } from '../components/BotonCalc';

enum Operadores {
    sumar, restar, multiplicar, dividir
}


export const CalculadoraScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('100');
    const [numero, setNumero] = useState('100');
<
    const ultimaOperacion = useRef<Operadores>()

    const limpiar = () => {
        setNumero('0');
    };

    const createNum = (numeroTexto:string) =>{

        //No aceptgar doble punto

        if (numero.includes('.') && numeroTexto === '.') {return;}

        if (numero.startsWith('0') || numero.startsWith('-0')){

            // Punto decimal
            if (numeroTexto === '.'){
                setNumero(numero + numeroTexto);

                //Evaluar si es otro 0 y hay un punto
            } else if ( numeroTexto === '0' && numero.includes('.')){
                setNumero(numero + numeroTexto);

                //Evaluar si es diferente de 0 y no tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.')){
                if (numero.includes('-')){
                    setNumero('-' + numeroTexto);
                } else {
                    setNumero(numeroTexto);
                }

                //Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')){
                setNumero(numero);
            }

        } else {
            setNumero(numero + numeroTexto);
        }

    };

    const positivoNegativo = () => {
        if (numero.includes('-')){
            setNumero(numero.replace('-',''));
        } else {
            setNumero('-' + numero);
        }
    };

    const delFunction = () => {
        console.log(numero.length);

        if (numero.length > 1){
            if (numero.includes('-') && numero.length === 2){
                setNumero('0');
            } else {
                setNumero(numero.substring(0,numero.length - 1));
            }
        } else {
            setNumero('0');
        }
    };

    const cambiarNumPorAnterior = () => {
        if (numero !== '0'){
            if (numero.endsWith('.')){
                setNumeroAnterior(numero.slice(0,-1));
            } else {
                setNumeroAnterior(numero);
            }
            setNumero('0');
        }
    };

    const 

  return (
    <View style={style.calculadoraContainer}>
        <Text style={style.resultadoPequeno}>{numeroAnterior}</Text>
        <Text style={style.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>


        <View style={style.fila}>
            <BotonCalc texto="C" color="#9B9B9B" accion={limpiar}/>
            <BotonCalc texto="+/-" color="#9B9B9B" accion={positivoNegativo}/>
            <BotonCalc texto="del" color="#9B9B9B" accion={delFunction}/>
            <BotonCalc texto="/" color="#FF9427" accion={cambiarNumPorAnterior}/>
        </View>

        <View style={style.fila}>
            <BotonCalc texto="7" accion={createNum}/>
            <BotonCalc texto="8" accion={createNum}/>
            <BotonCalc texto="9" accion={createNum}/>
            <BotonCalc texto="x" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={style.fila}>
            <BotonCalc texto="4" accion={createNum}/>
            <BotonCalc texto="5" accion={createNum}/>
            <BotonCalc texto="6" accion={createNum}/>
            <BotonCalc texto="-" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={style.fila}>
            <BotonCalc texto="1" accion={createNum}/>
            <BotonCalc texto="2" accion={createNum}/>
            <BotonCalc texto="3" accion={createNum}/>
            <BotonCalc texto="+" color="#FF9427" accion={limpiar}/>
        </View>

        <View style={style.fila}>
            <BotonCalc texto="0" accion={createNum} ancho />
            <BotonCalc texto="." accion={createNum}/>
            <BotonCalc texto="=" color="#FF9427" accion={limpiar}/>
        </View>
    </View>
  );
};
