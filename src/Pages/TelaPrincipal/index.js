import React from "react"
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from "./style"

export default function TelaPrincipal({ navigation }){
    return(
        <View style={styles.tela} >    

            <ScrollView style={styles.scrollView}>  

                <View style={styles.paginaPrincipal}>   

                    <TextInput style={styles.searchBar} placeholder="Digite um alimento" onChangeText={text => {console.log(text)}}/>

                    <TouchableOpacity 
                    id="estrogonofe_de_frango"   //Prato 1
                    style={styles.cardAlimento}
                    onPress={()=> navigation.navigate(('AlimentoSelecionado'),{   //ao clicar
                        name: 'Estrognofe de Frango',
                        calorias: '100g',
                        carboidratos:'3,8g',
                        fibras:'0g',
                        proteinas:'17g',
                        indiceGlicemico:'?',
                    })}
                    >
                        <Text 
                        style={styles.textCardAlimento}
                        >Estrognofe de Frango</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

            <TouchableOpacity id="botaoCamera" onPress={()=> navigation.navigate('Camera')} style={styles.botaoCamera}><Text>.</Text></TouchableOpacity>

        </View>
    )
}

