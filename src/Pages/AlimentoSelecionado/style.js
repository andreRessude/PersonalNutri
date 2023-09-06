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
        backgroundColor:"blue",
        color:"#ffffff",

        width:"90%",
        textAlign:"center",
        borderRadius:25,
        paddingVertical:100,
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
