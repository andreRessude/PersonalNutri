import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput, Keyboard } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons'
import { buscarPratos } from "../../Services/api"

export default function TelaPrincipal(){

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
    //

    //Navegar entre as paginas
        const navigation = useNavigation()
        //ir para telaCamera
        function openScreenCamera(){    
            navigation.navigate('TelaCamera')
        }
        //ir para telaAlimentoSelecionado e enviar dados da API
        const openScreenAlimentoSelecionado = (pratos) => {    
            console.log(pratos.nome)
            navigation.navigate(('TelaAlimentoSelecionado'),{pratos})
        }
    //

    //Botao pesquisar
        function pesquisar(){
            alert("Botão pesquisar acionado")
        }
    //


    return(
        <View style={styles.tela}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paginaPrincipal}>
                    
                    <View style={styles.boxSearchBar}>
                        <TextInput style={styles.searchBar} placeholder="Digite um alimento" onChangeText={text => {console.log(text)}}/>
                        <TouchableOpacity onPress={() => {pesquisar()}}>
                            <FontAwesome name="search" style={styles.searchBarIcon}/>
                        </TouchableOpacity>
                    </View>

                    {/*utilizando os dados da api para criar cards*/}
                    {pratos.map((prato) => (
                        <TouchableOpacity
                        key={prato.id}
                        id={prato.id}
                        style={styles.cardAlimento}
                        onPress={() => openScreenAlimentoSelecionado(prato)}
                        >
                            <Text style={styles.textCardAlimento}>{prato.nome}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

            </ScrollView>

            <TouchableOpacity id="botaoCamera" onPress={openScreenCamera} style={styles.botaoCamera}>
                <FontAwesome name='camera' style={styles.botaoCameraIcon}/>
            </TouchableOpacity>
        </View>
    )
}
