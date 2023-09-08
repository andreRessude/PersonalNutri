import React from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import styles from "./style"
import { FontAwesome } from '@expo/vector-icons'

export default function TelaPrincipal(){
    
    const navigation = useNavigation()
    
    function openScreenCamera(){    //ir para telaCamera
        navigation.navigate('TelaCamera')
        
    }
    
    function openScreenAlimentoSelecionado(){   //ir para telaAlimentoSelecionado
        navigation.navigate(('TelaAlimentoSelecionado'),{
            name: 'Estrognofe de Frango',
            calorias: '100g',
            carboidratos:'3,8g',
            fibras:'0g',
            proteinas:'17g',
            indiceGlicemico:'?',
        })

    }

    return(
        <View style={styles.tela} >    

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
    )
}
