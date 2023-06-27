import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';


interface Props {
    title:string,
    position: 'br' | 'bl';
    onPress:() => void;
}

export const Fab = ({title, onPress, position = 'br'}:Props) => {

    const ios = () => {
        return (
        <TouchableOpacity
        activeOpacity={0.75}
        style={[styles.fabLocation,
            (position === 'bl'
            ? styles.left
            : styles.right )]}
            onPress={ onPress }>
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
        );
    };

    const android = () => {
        return (
        <View  style={[styles.fabLocation,
            (position === 'bl'
            ? styles.left
            : styles.right ),
        ]}>
            <TouchableNativeFeedback
                    onPress={ onPress }
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                    >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
            </TouchableNativeFeedback>
        </View>);
    };


  return ((Platform.OS === 'android') ? android() : ios());
};


const styles = StyleSheet.create({
    fabLocation:{
        position:'absolute',
        bottom:30,
    },
    left:{
        left:25,
    },
    right:{
        right:25,
    },
    fab:{
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius:100,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 8,
    },
    fabText:{
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
