import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from "@rneui/themed";
import { buscarPratos } from '../../Services/api';
import { useNavigation } from "@react-navigation/native"
import styles from './style';

export default function BarraPesquisa() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const navigation = useNavigation()
    const openScreenAlimentoSelecionado = (pratos) => {    //ir para telaAlimentoSelecionado e enviar dados da API
        console.log(pratos.nome)
        navigation.navigate(('TelaAlimentoSelecionado'),{pratos})
    };

    useEffect(() => {
        async function carregarPratos() {
        try {
            const data = await buscarPratos();
            setData(data);
            console.log("API consultada!");
        } catch (error) {
            alert("Não foi possível conectar à API.");
        }
        }
        carregarPratos();
    }, []);

    useEffect(() => {
        // Filtrar os dados com base na pesquisa do usuário
        const filtered = data.filter((item) =>
        item.nome.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filtered);
    }, [search, data]);

    const CardsAlimentos = ({ item }) => {
        return (
            <View style={styles.listaCards}>
                <TouchableOpacity
                style={styles.cardContainer}
                onPress={() => openScreenAlimentoSelecionado(item)}>
                    <Image source={{ uri: item.imagem }} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardText}>{item.nome}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View>
        <SearchBar
            platform="android"
            containerStyle={{
            width: "90%",
            backgroundColor: "transparent",
            borderColor: "#000000",
            borderWidth: 1,
            margin: 16,
            borderRadius: 25
            }}
            inputStyle={{ paddingHorizontal: 15 }}
            placeholder="Digite um alimento..."
            onChangeText={(text) => setSearch(text)}
            value={search}
        />
        <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={CardsAlimentos}
        showsVerticalScrollIndicator={false}
        />
        </View>
    );
}
