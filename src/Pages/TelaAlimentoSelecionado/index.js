import React, { Component } from "react"
import { View, Text } from 'react-native'
import styles from "./style"

export default function TelaAlimentoSelecionado({ route }){
    return(
        <View style={styles.telaAlimentoSelecionado}>
            <Text style={styles.imagemPrato}>Imagem do prato</Text>

            <Text style={styles.titulo}>Valores Nutricionais</Text>

            <View style={styles.tabelaNutricional}>
                <Text style={styles.textTabelaNutricional}>Calorias: {route.params?.calorias}</Text>
                <Text style={styles.textTabelaNutricional}>Carboidratos: {route.params?.carboidratos}</Text>
                <Text style={styles.textTabelaNutricional}>Fibras: {route.params?.fibras}</Text>
                <Text style={styles.textTabelaNutricional}>Proteínas: {route.params?.proteinas}</Text>
                <Text style={styles.textTabelaNutricional}>Índice Glicêmico: {route.params?.indiceGlicemico}</Text>
            </View>
        </View>
    )
}    
