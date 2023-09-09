import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons'
import { buscarPratos } from "../../Services/api"
import SearchBar from "../../Components/SearchBar/searchBar"

export default function TelaPrincipal(){

    const [pratos, setPratos] = useState([]);

    //chamar dados da api
    useEffect(() => {
        async function carregarPratos() {
            try {
                const pratos = await buscarPratos();
                setPratos(pratos);
            } catch (error) {
                // Tratar erros
            }
        }
        carregarPratos();
    }, []);

    // Certifique-se de que pratos seja um array e tenha elementos antes de acessar pratos[0].nome
    if (pratos.length > 0) {
        console.log('API consultada com sucesso!'); // Acesse a propriedade nome do primeiro prato
    }
    
    //Navegar entre as paginas
    const navigation = useNavigation()
    function openScreenCamera(){    //ir para telaCamera
        navigation.navigate('TelaCamera')
        
    }
    const openScreenAlimentoSelecionado = (pratos) => {   //ir e enviar dados para telaAlimentoSelecionado
        console.log(pratos.nome)
        navigation.navigate(('TelaAlimentoSelecionado'),{pratos})
    }

    return(
        <View style={styles.tela}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paginaPrincipal}>
                                        
                    {
                    /*<SearchBar/>*/}
                    <TextInput style={styles.searchBar} placeholder="Digite um alimento" onChangeText={text => {console.log(text)}}/>

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

        /*
        <View style={styles.tela}>    
            <ScrollView style={styles.scrollView}>  
                <View style={styles.paginaPrincipal}>   
                    <TextInput style={styles.searchBar} placeholder="Digite um alimento" onChangeText={text => {console.log(text)}}/>
                    <TouchableOpacity   //Prato 1
                    id="estrogonofe_de_frango" 
                    style={styles.cardAlimento}
                    onPress={ openScreenAlimentoSelecionado}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   //Prato 1
                    id="estrogonofe_de_frango" 
                    style={styles.cardAlimento}
                    onPress={ openScreenAlimentoSelecionado}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   //Prato 1
                    id="estrogonofe_de_frango" 
                    style={styles.cardAlimento}
                    onPress={ openScreenAlimentoSelecionado}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   //Prato 1
                    id="estrogonofe_de_frango" 
                    style={styles.cardAlimento}
                    onPress={ openScreenAlimentoSelecionado}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   //Prato 1
                    id="estrogonofe_de_frango" 
                    style={styles.cardAlimento}
                    onPress={ openScreenAlimentoSelecionado}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>
                    <TouchableOpacity   //Prato 1
                    id="estrogonofe_de_frango" 
                    style={styles.cardAlimento}
                    onPress={ openScreenAlimentoSelecionado}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity id="botaoCamera" onPress={openScreenCamera} style={styles.botaoCamera}>
                <FontAwesome name='camera' style={styles.botaoCameraIcon}/>
            </TouchableOpacity>
        </View>
        */
    )
}
