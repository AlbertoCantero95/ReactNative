import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={style.container}>
        <View style={style.cajaMorada}/>
        <View style={style.cajaNaranja}/>
        <View style={style.cajaAzul}/>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
    },
    cajaMorada:{
        // top:100,
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#5856D6',
    },
    cajaNaranja:{
        width:100,
        height:100,
        top:50,
        // left:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#F0A23B',
    },
    cajaAzul:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor: '#28C4D9',
    },
});

//Ejercicio 1
// cajaMorada:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
// },
// cajaNaranja:{
//     flex:1,
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// }



// Ejercicio 2
// container:{
//     justifyContent:'center',
//     flex:1,
//     backgroundColor:'#28425B',
// },
// cajaMorada:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });


// Ejercicio 3
// container:{
//     flex:1,
//     justifyContent:'center',
//     backgroundColor:'#28425B',
// },
// cajaMorada:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
//     alignSelf:'flex-end',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
//     alignSelf:'center',
// },

// Ejercicio 4
// container:{
//     // flexDirection:'row',
//     flex:1,
//     justifyContent:'space-between',
//     backgroundColor:'#28425B',
// },
// cajaMorada:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
//     top:0,
//     alignSelf:'flex-end',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
//     alignSelf:'center',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
//     alignSelf:'flex-start',
// },
// });

// Ejercicio 5
// container:{
//     flexDirection:'row',
//     flex:1,
//     justifyContent:'space-between',
//     backgroundColor:'#28425B',
// },
// cajaMorada:{
//     width:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
//     top:0,
// },
// cajaNaranja:{
//     width:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });

// Ejercicio 6
// container:{
//     flex:1,
//     backgroundColor:'#28425B',
// },
// cajaMorada:{
//     flex:2,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
//     top:0,
// },
// cajaNaranja:{
//     flex:2,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     flex:4,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });

// Ejercicio 7
// container:{
//     flex:1,
//     backgroundColor:'#28425B',
//     alignSelf:'center',
//     justifyContent:'center',
// },
// cajaMorada:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });

// Ejercicio 8
// container:{
//     flex:1,
//     backgroundColor:'#28425B',
//     alignSelf:'center',
//     justifyContent:'center',
// },
// cajaMorada:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     left:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });

// Ejercicio 9
// container:{
//     flex:1,
//     backgroundColor:'#28425B',
//     alignSelf:'center',
//     justifyContent:'center',
// },
// cajaMorada:{
//     top:100,
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     left:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });

//Ejercicio 10
// container:{
//     flex:1,
//     backgroundColor:'#28425B',
//     alignSelf:'center',
//     flexDirection:'row',
//     alignItems:'center',
// },
// cajaMorada:{
//     // top:100,
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#5856D6',
// },
// cajaNaranja:{
//     width:100,
//     height:100,
//     top:50,
//     // left:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#F0A23B',
// },
// cajaAzul:{
//     width:100,
//     height:100,
//     borderWidth:10,
//     borderColor:'white',
//     backgroundColor: '#28C4D9',
// },
// });