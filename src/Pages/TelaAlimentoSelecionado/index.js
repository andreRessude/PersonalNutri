import React from "react"
import { View, Text, Image } from 'react-native'
import {useRoute} from '@react-navigation/native'
import styles from "./style"

export default function TelaAlimentoSelecionado(){

    const route = useRoute();
    const { pratos } = route.params;


    return(
        <View style={styles.telaAlimentoSelecionado}>
            <Text style={styles.titulo}> {pratos.nome} </Text>
            <Image
            source={{uri:pratos.imagem}}
            style={styles.imagemPrato}
            />
            <Text style={styles.titulo}> Valores Nutricionais </Text>

            <View style={styles.tabelaNutricional}>
                <Text style={styles.porcaoTabela}>Porção: 300g</Text>
                <View style={styles.linhaTabela}>
                    <Text style={styles.textTabelaNutricional}> Calorias: </Text>
                    <Text style={styles.textTabelaNutricional}> {pratos.calorias} </Text>
                </View>
                <View style={styles.linhaTabela}>
                    <Text style={styles.textTabelaNutricional}> Fibras: </Text>
                    <Text style={styles.textTabelaNutricional}> {pratos.fibras} </Text>
                </View>
                <View style={styles.linhaTabela}>
                    <Text style={styles.textTabelaNutricional}> Lipídios: </Text>
                    <Text style={styles.textTabelaNutricional}> {pratos.lipidios} </Text>
                </View>
                <View style={styles.linhaTabela}>
                    <Text style={styles.textTabelaNutricional}> Carga glicêmica: </Text>
                    <Text style={styles.textTabelaNutricional}> {pratos.indiceGlicemico} </Text>
                </View>
            </View> 
        </View>
    )
}    
