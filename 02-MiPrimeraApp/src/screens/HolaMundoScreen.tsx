import { Text, View } from 'react-native';

export const HolaMundoScreen = () => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flex:1,
          // backgroundColor:'grey',
          justifyContent:'center',
        }
      }>
        <Text style={{
          fontSize:45,
          textAlign:'center',
        }}>
          Hola Mundo desde components
        </Text>
      </View>
  )
}
