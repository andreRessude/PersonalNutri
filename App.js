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
              textTransform:"uppercase",
              fontWeight:"bold"
            }
          }
        }/>

        <Stack.Screen 
        name="AlimentoSelecionado" 
        component={AlimentoSelecionado}
        options={
          {
            title:"Estrogonofe de Frango", 
            headerStyle:{
              backgroundColor:"#CD021B"
            },
            headerTitleAlign:"center",
            headerTitleStyle:{
              color:"#ffffff",
              textTransform:"uppercase",
              fontWeight:"bold",
              fontSize:16
            }
          }
        }/>
        
        <Stack.Screen 
        name="TelaCamera" 
        component={TelaCamera}
        options={
          {
            title:"", 
            headerStyle:{
            backgroundColor:"#000000"
            },
            headerLeftContainerStyle:{
              backgroundColor:"#ffffff",
              borderRadius:50,
              left:15,
              width:50,
              height:50,
              justifyContent:"center"
            }
          }
        }/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
