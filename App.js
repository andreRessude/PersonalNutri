import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import api from './src/services/api'

//paginas
import TelaPrincipal from './src/Pages/TelaPrincipal'
import AlimentoSelecionado from './src/Pages/AlimentoSelecionado'
import Camera from './src/Pages/Camera'

//navegador de paginas
const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Principal" component={TelaPrincipal}/>
        <Stack.Screen name="AlimentoSelecionado" component={AlimentoSelecionado}/>
        <Stack.Screen name="Camera" component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
