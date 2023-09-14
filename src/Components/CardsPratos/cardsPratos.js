import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { buscarPratos } from "../../Services/api"
import styles from "./style"

export default function CardsPratos(){

    //Navegar entre as paginas
    const navigation = useNavigation()
    const openScreenAlimentoSelecionado = (pratos) => {    //ir para telaAlimentoSelecionado e enviar dados da API
        console.log(pratos.nome)
        navigation.navigate(('TelaAlimentoSelecionado'),{pratos})
    };

    //chamar dados da api
    const [pratos, setPratos] = useState([]);
    useEffect(() => {
        async function carregarPratos() {
            try {
                const pratos = await buscarPratos();
                setPratos(pratos);
                console.log("API consultada!")
            } catch (error) {
                alert("Nao foi possivel conectar à API.")
            }
        }
        carregarPratos();
    }, []);

    return(
        <View style={styles.containerCards}>
        {pratos.map((prato) => (
            <TouchableOpacity
            key={prato.id}
            id={prato.id}
            style={styles.cardAlimentoContainer}
            onPress={() => openScreenAlimentoSelecionado(prato)}
            >
                <Image
                source={{uri:prato.imagem}}
                style={styles.backgroundImage}
                />
                <View style={styles.cardAlimentoContent}>
                    <Text style={styles.cardAlimentoText}>{prato.nome}</Text>
                </View>
            </TouchableOpacity>
        ))}
        </View>
    );
}