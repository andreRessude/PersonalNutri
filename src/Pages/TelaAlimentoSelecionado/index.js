import React from "react"
import { View, Text, Image } from 'react-native'
import {useRoute} from '@react-navigation/native'
import styles from "./style"

export default function TelaAlimentoSelecionado(){

    const route = useRoute();
    const { pratos } = route.params;


    return(
        <View style={styles.telaAlimentoSelecionado}>
            <Text style={styles.titulo}>{pratos.nome}</Text>
            <Image
            source={{uri:pratos.imagem}}
            style={styles.imagemPrato}
            />
            <Text style={styles.titulo}>Valores Nutricionais</Text>
            <View style={styles.tabelaNutricional}>
                <Text style={styles.textTabelaNutricional}>Calorias: {pratos.calorias}</Text>
                <Text style={styles.textTabelaNutricional}>Proteína: {pratos.proteinas}</Text>
                <Text style={styles.textTabelaNutricional}>Fibras: {pratos.fibras}</Text>
                <Text style={styles.textTabelaNutricional}>Carboidratos: {pratos.carboidratos}</Text>
                <Text style={styles.textTabelaNutricional}>Índice Glicêmico: {pratos.indiceGlicemico}</Text>
            </View> 
        </View>
    )
}    
