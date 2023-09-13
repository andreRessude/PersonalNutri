import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    telaAlimentoSelecionado:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    titulo:{
        width:"100%",
        padding:15,
        textAlign:"center",
        fontSize:24,
        fontWeight:"bold",
    },
    imagemPrato:{
        width:"90%",
        height:100,
        borderRadius:25,
        paddingVertical:100,
        margin:10
    },
    tabelaNutricional: {
        width:"90%",
        margin:10,
        alignItems:"center",
    },
    textTabelaNutricional:{
        padding:10,
        width:"100%",
    },
});

export default styles
