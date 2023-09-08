import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator()

import TelaPrincipal from '../Pages/TelaPrincipal'
import TelaAlimentoSelecionado from '../Pages/TelaAlimentoSelecionado'
import TelaCamera from '../Pages/TelaCamera'

export function StackRoutes(){
  return (
    <Navigator>
        <Screen name="TelaPrincipal" 
        component={TelaPrincipal} 
        options={
          {
            title:"Personal Nutri", 
            headerStyle:{
              backgroundColor:"#CD021B"
            },
            headerTitleAlign:"center",
            headerTitleStyle:{
              color:"#ffffff",
              fontWeight:"bold"
            }
          }
        }/>

        <Screen 
        name="TelaAlimentoSelecionado" 
        component={TelaAlimentoSelecionado}
        options={
          {
            title:"Estrogonofe de Frango", 
            headerStyle:{
              backgroundColor:"#CD021B"
            },
            headerTitleAlign:"center",
            headerTitleStyle:{
              color:"#ffffff",
              fontWeight:"bold",
              fontSize:16
            }
          }
        }/>
        
        <Screen 
        name="TelaCamera" 
        component={TelaCamera}
        options={
          {
            title:"", 
            headerStyle:{
              backgroundColor:"#000000"
            },
          }
        }/>
    </Navigator>
  )
}