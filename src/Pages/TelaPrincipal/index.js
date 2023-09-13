import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput, Keyboard, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons'
import { buscarPratos } from "../../Services/api"
import { SearchBar } from "@rneui/themed"

export default function TelaPrincipal(){

    //Navegar entre as paginas
        const navigation = useNavigation()
        function openScreenCamera(){    //telaCamera
            navigation.navigate('TelaCamera')
        }
        const openScreenAlimentoSelecionado = (pratos) => {    //ir para telaAlimentoSelecionado e enviar dados da API
            console.log(pratos.nome)
            navigation.navigate(('TelaAlimentoSelecionado'),{pratos})
        }
    //

    //barra de pesquisa
        const [search, setSearch] = useState("")
        const updateSearch = (search) =>{
            setSearch(search)
            console.log(search)
        }
    //

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


    return(
        <View style={styles.tela}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.paginaPrincipal}>

                    
                    <SearchBar  // Barra de pesquisa
                    platform="android"
                    containerStyle={
                      (containerStyle = {
                        width: "90%",
                        backgroundColor: "transparent",
                        borderColor: "#000000",
                        borderWidth: 1,
                        marginTop:30,
                        borderRadius:25,
                      })
                    }
                    inputStyle={
                      (inputStyle = { paddingHorizontal: 15 })
                    }
                    placeholder="Digite um alimento..."
                    onChangeText={updateSearch}
                    // onChangeText={text => {console.log(text)}}
                    />
                  

                    {/*utilizando os dados da api para criar cards*/}
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

            </ScrollView>

            <TouchableOpacity id="botaoCamera" onPress={openScreenCamera} style={styles.botaoCamera}>
                <FontAwesome name='camera' style={styles.botaoCameraIcon}/>
            </TouchableOpacity>
        </View>
    )
}
