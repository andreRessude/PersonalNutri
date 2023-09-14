import React, { useState } from 'react';
import { SearchBar } from "@rneui/themed"

export default function BarraPesquisa () {

    const [search, setSearch] = useState("")
    const updateSearch = (search) =>{
        setSearch(search)
        console.log(search)
    }

  return(
    <SearchBar  // Barra de pesquisa
        platform="android"
        containerStyle={
            (containerStyle = {
            width: "90%",
            backgroundColor: "transparent",
            borderColor: "#000000",
            borderWidth: 1,
            margin:16,
            borderRadius:25,
            })
        }
        inputStyle={
            (inputStyle = { paddingHorizontal: 15 })
        }
        placeholder="Digite um alimento..."
        onChangeText={updateSearch}
        />
  )
};
