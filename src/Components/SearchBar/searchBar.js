import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`http://192.168.0.34:3000/pratos?query=${query}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar pratos');
      }
      const data = await response.json();
      setResults(data);
      setError(null); // Limpa qualquer erro anterior
    } catch (error) {
      console.error('Erro ao buscar pratos:', error);
      setError('Erro ao buscar pratos. Tente novamente mais tarde.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Pesquisar pratos..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Button title="Pesquisar" onPress={handleSearch} />

      {error && <Text>{error}</Text>}

      {results.length > 0 && (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>{item.nome}</Text> /* Use o nome real da propriedade */
          )}
        />
      )}
    </View>
  );
}

export default SearchBar;
