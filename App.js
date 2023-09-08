import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import api from './src/services/api'

//paginas
import TelaPrincipal from './src/Pages/TelaPrincipal'
import AlimentoSelecionado from './src/Pages/AlimentoSelecionado'
import TelaCamera from './src/Pages/TelaCamera'

//navegador de paginas
const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
        name="TelaPrincipal" 
        component={TelaPrincipal}/>
        

        <Stack.Screen 
        name="AlimentoSelecionado" 
        component={AlimentoSelecionado}/>
        

        <Stack.Screen 
        name="TelaCamera" 
        component={TelaCamera}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
